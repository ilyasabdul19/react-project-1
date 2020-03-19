const apiKey = 'x1TzV2kxQ1RFf9rPD6k5-DRnzQWCPEVy2FApY9b8yuIeLBHCuoqbbBzuKu_mzNMTRMRRrrRdz1Z_vbmVMT9H92yKifkhXkB7ttHV8AN2y4sO-hQNmT22fFmixnfRXXYx';
const yelp = {
    searchYelp(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
            headers: {
              Authorization: `Bearer ${apiKey}` 
            }
          }).then(response=> {
                return response.json();
          }).then(jsonResponse => {
              if(jsonResponse.businesses) {
                  return jsonResponse.businesses.map(business => {
                      return {
                          id:business.id,
                          imageSrc: business.image_url,
                          name:business.name,
                          address:business.location.address1,
                          city: business.location.city,
                          state: business.location.state,
                          zipCode:business.location.zip_code,
                          category:business.categories[0].title,
                          rating: business.rating,
                          reviewCount: business.review_count
                      }
                  })
              }
          })

    }

}

export default yelp;