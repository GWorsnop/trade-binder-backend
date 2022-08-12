# Trade-Binder-backend : A back-end personal project

## A virtual replication of a real-world MTG collection that can be sent to friends in order to ease trading.

As you would expect from a trading card game, trading cards with friends is a pivotal part of Magic: the Gathering.  
This project is a website that replicates a real-world trading card collection that can be sent to friends in order to ease trading.  
Cards are searched for and added using Scryfall API,  an already established API, accessed through axios.  
These cards can then be added to a pSQL database through an API I have created with express and node.js.

---

The intention of the back-end element of this project was to develop my application of already established APIs, including navigating and understanding documentation. I worked with the documentation of the Scryfall API in order to collect all of the required information.  
The response was then curated and organised into an object which was used to interact with my pSQL database.  
Data of the cards are stored here and can be interacted with.  So far I have implemented adding cards, editing quantity and deleting cards.  

This API uses _routers_ in order to help breakdown the logic into sub routers.  
Similarly, the API uses error handling middleware that is separated into it's own file.  
All of these should aid in the reading of this API with no loss of functionality.  
My next step in this project will be to add more endpoints to the API in order to allow creation of users.

--- 

### Any critique and feedback would be greatly appreciated as this is an ongoing project!
