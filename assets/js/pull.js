// File connecting the Data Portal Api 

$.getJSON('http://data.cityofchicago.org/resource/8pix-ypme.json', function(lstops){
   
    $.each(lstops, function(i, lstop){
        $('#lstoplist').append(generateLStopLink(lstop));
    
});
    
    $('#lstoplist').listview('refresh');
    
});

function generateLStopLink(lstop){
     
    return '<li><a href="javascript:void(0)'
            + '"onclick="goToStopDetailPage(\''
            + lstop.stop_name 
            + '\',\''
            + lstop.station_descriptive_name + '\')">'
            + lstop.stop_name
            + '</a></li>';
}

function goToStopDetailPage(stopName){
    var stopPage = $("<div data-role='page' data-url=station><div data-role='header'><h1>"
                     + stopName + "</h1></div><div data-role='content'><h1>"
                     + stopName + "</h1></div><data-role='footer'><h4>"
                     + stopName + "</h4></div></div>");
    
    stopPage.appendTo($.mobile.pageContainer );
    
    $.mobile.changePage( stopPage );
}