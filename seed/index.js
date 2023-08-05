const express = require('express')
const mongoose = require('mongoose')
const Campground = require('../models/campground')
mongoose.connect('mongodb://127.0.0.1:27017/yelpcamp')
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    })
    .catch((err) => {
        console.log(err)
    })
const cities = [
    { location: "Seattle, Washington", title: "Rainy Days Campground", price: 80, image: "https://source.unsplash.com/random/900%C3%97700/?camp", description: "Escape the rainy city and cozy up at Rainy Days Campground, nestled in the lush forests just outside of Seattle. Enjoy hiking trails, fishing, and breathtaking views of the surrounding mountains." },

    { location: "Portland, Oregon", title: "Tree Hugger's Hideaway", price: 85, image: "https://source.unsplash.com/random/900%C3%97700/?camp", description: "Embrace your inner tree hugger at Tree Hugger's Hideaway, a serene forest retreat in the heart of Portland. Enjoy the tranquil surroundings, hike the nearby trails, or simply relax in your private treehouse." },

    { location: "San Francisco, California", title: "Golden Gate Glamping", price: 120, image: "https://source.unsplash.com/random/900%C3%97700/?camp", description: "Experience the best of San Francisco with a stay at Golden Gate Glamping. Located just minutes from the iconic Golden Gate Bridge, this luxurious campground offers stunning views of the city skyline and bay." },

    { location: "Los Angeles, California", title: "Hollywood Hills Hideout", price: 150, image: "https://source.unsplash.com/random/900%C3%97700/?camp", description: "Escape the hustle and bustle of LA at the Hollywood Hills Hideout, a secluded retreat nestled in the hills above the city. Enjoy the breathtaking views, cozy up by the fire pit, or explore the nearby trails." },

    { location: "Las Vegas, Nevada", title: "Sin City Safari", price: 100, image: "https://source.unsplash.com/random/900%C3%97700/?camp", description: "Experience the glitz and glamour of Las Vegas with a stay at Sin City Safari, an oasis in the heart of the desert. Enjoy luxurious amenities, explore the nearby national parks, or hit the strip for a night out." },

    { location: "Denver, Colorado", title: "Rocky Mountain Retreat", price: 95, image: "https://source.unsplash.com/random/900%C3%97700/?camp", description: "Escape to the mountains with a stay at Rocky Mountain Retreat, located in the heart of Colorado's stunning Rocky Mountains. Enjoy world-class skiing, hiking, and outdoor activities, or simply relax and take in the breathtaking views." },

    { location: "Chicago, Illinois", title: "Windy City Wilderness", price: 75, image: "https://source.unsplash.com/random/900%C3%97700/?camp", description: "Experience the best of the Windy City with a stay at Windy City Wilderness, located just minutes from downtown Chicago. Enjoy the peace and quiet of nature, explore the nearby beaches, or take a short drive to the city for world-class dining and entertainment." },

    { location: "New York, New York", title: "Concrete Jungle Campground", price: 130, image: "https://source.unsplash.com/random/900%C3%97700/?camp", description: "Experience the excitement of New York City with a stay at Concrete Jungle Campground, located just minutes from the heart of Manhattan. Enjoy luxurious amenities, explore the nearby parks and museums, or take in a Broadway show." },

    { location: "Austin, Texas", title: "Hill Country Haven", price: 90, image: "https://source.unsplash.com/random/900%C3%97700/?camp", description: "Escape to the rolling hills of Texas with a stay at Hill Country Haven, located just outside of Austin. Enjoy hiking and biking trails, nearby wineries and breweries, or simply relax in a hammock and take in the views." },

    { location: "Asheville, North Carolina", title: "Mountain Vista Campground", price: 100, image: "https://source.unsplash.com/random/900%C3%97700/?camp", description: "Experience the beauty of the Appalachian Mountains with a stay at Mountain Vista Campground, located just outside of Asheville. Enjoy hiking trails, waterfalls, and stunning views of the Blue Ridge Mountains." },

    { location: "Miami, Florida", title: "Beachside Bungalow", price: 120, image: "https://source.unsplash.com/random/900%C3%97700/?camp", description: "Escape to the sun and sand with a stay at Beachside Bungalow, located just steps from the beach in Miami. Enjoy water sports, beach volleyball, or simply relax and soak up the sun." },

    { location: "Seattle, Washington", title: "Island Oasis", price: 95, image: "https://source.unsplash.com/random/900%C3%97700/?camp", description: "Experience the beauty of the Pacific Northwest with a stay at Island Oasis, located on a private island just off the coast of Seattle. Enjoy kayaking, fishing, and hiking trails, or simply relax and take in the stunning views of the Sound." },

    { location: "Nashville, Tennessee", title: "Music City Campground", price: 80, image: "https://source.unsplash.com/random/900%C3%97700/?camp", description: "Experience the best of Nashville with a stay at Music City Campground, located just minutes from downtown. Enjoy live music, delicious Southern cuisine, and nearby hiking trails." }
];
Campground.insertMany(cities)
    .then((data) => {
        console.log(data)
    })