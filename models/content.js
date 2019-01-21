
    const mongoose = require('mongoose');
    
    const contentSchema = new mongoose.Schema({
        title: String,
        content: Array
    });
    
    const Content = mongoose.model('Content', contentSchema);
    
    module.exports = Content;