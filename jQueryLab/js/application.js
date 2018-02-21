jQuery(document).ready(function () {

    //SEARCHING THE DOM:

    //descendant selector
    $("#destinations li");
    //same as above but using traversal language
    $("#destinations").find("li");

    //first descendant selector
    $("li:first");
    //same as above but using traversal language
    $("li").first();


    //TRAVERSING THE DOM:
    
    //walking the DOM -- method chaining
    $("li").first().next();
    //walking UP the DOM
    $("li").first().parent();
    //walking DOWN the DOM
    $("#destinations").children("li");
});