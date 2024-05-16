const axios = require('axios');

class YelpAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.yelp.com/v3/businesses/search';
        this.headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
    }

    async searchBusinesses(searchTerms, location, sortBy = 'best_match') {
        try {
            const response = await axios.get(this.baseUrl, {
                headers: this.headers,
                params: {
                    term: searchTerms,
                    location: location,
                    sort_by: sortBy
                }
            });

            const businesses = response.data.businesses || [];

            // Extract relevant information and format the response
            const businessListings = businesses.map(business => ({
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: (business.categories[0] || {}).title,
                rating: business.rating,
                reviewCount: business.review_count,
                url: business.url
            }));

            return businessListings;

        } catch (error) {
            console.error(`Yelp API request failed: ${error.response ? error.response.data : error.message}`);
            throw error;
        }
    }
}

module.exports = YelpAPI;
