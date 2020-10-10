var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([79, 25]),
    zoom: 4
  })
});
//

var utarray = [235,904,743,748,232,233,235,236,246,249,250,252,747,748,894,893,892,891,890,928,927,926,925,924,923,922,921,920,919,918,917,916,915,914,913,912,911,910,909,908,907,906,905,904,903,902,901,900,899,898,897,896,895,894];
var Hp = [225,228,229,230,231,232,234,237,238,239,240,241,242,243,244,245,247,248,251,253,254,255,256,257,258]
var jkarray = [225,226,228,229,237,271,280,289,290,291,292,293,294,295,296,298,299,300,304,305,306,307,308,310,312,313,314,864,886,888];
var himProv = [5,52,53,220,226,244,934,185,201,202,215,225,228,231,232,246,313,697,859,901,928,934,935,936,214,289,689,889,890,891,892,938,939,940,941,162,165,166,167,174,178,188,189,289];

var allData = [];
document.addEventListener('click',function(){
  $.get('xfaults.json',function (data,stauts) {
      if(allData.length==0){
        allData.push(data);
        console.log(allData);          
      }

  })
})
document.querySelector(".showAllfaults").addEventListener('click',function(){
    setTimeout(()=>{
      for(var k=0;k<allData[0].features.length-1;k++){
      for(var i=0;i<allData[0].features[k].geometry.coordinates.length-1;i++){
      var lonlat = ol.proj.fromLonLat([allData[0].features[k].geometry.coordinates[i][0], allData[0].features[k].geometry.coordinates[i][1]]);
              var location2 = ol.proj.fromLonLat([allData[0].features[k].geometry.coordinates[i+1][0], allData[0].features[k].geometry.coordinates[i+1][1]]);

              //create the line's style
              var linieStyle = [
                          // linestring
                          new ol.style.Style({
                            stroke: new ol.style.Stroke({
                              color: 'red',
                              width: 2
                            })
                          })
                        ];

              //create the line       
              var linie = new ol.layer.Vector({
                      source: new ol.source.Vector({
                      features: [new ol.Feature({
                          geometry: new ol.geom.LineString([lonlat, location2]),
                          name: 'Line',
                      })]
                  })
              });

              //set the style and add to layer
              linie.setStyle(linieStyle);
              map.addLayer(linie);
      }         
      }
      for(var k=0;k<allData[0].features.length-1;k++){
      for(var i=0;i<allData[0].features[i].geometry.coordinates.length-1;i++){
        console.log(allData[0].features[i].geometry.coordinates[i][0]) ;
         console.log(allData[0].features[i].geometry.coordinates[i][1]) ;
        console.log(allData[0].features[i].geometry.coordinates[i+1][0]) ;
        console.log(allData[0].features[i].geometry.coordinates[i+1][1]) ;
         
      }
          }
        
    },1000);
})
document.getElementById('search').addEventListener('click', function(){
  if(document.getElementById('country_name').value==='India'){
  if(document.getElementById('province_name').value==="Himalaya"){

    for (var k=0;k<himProv.length-1;k++){
      for(var i=0;i<allData[0].features[himProv[k]].geometry.coordinates.length-1;i++){
      var lonlat = ol.proj.fromLonLat([allData[0].features[himProv[k]].geometry.coordinates[i][0], allData[0].features[himProv[k]].geometry.coordinates[i][1]]);
              var location2 = ol.proj.fromLonLat([allData[0].features[himProv[k]].geometry.coordinates[i+1][0], allData[0].features[himProv[k]].geometry.coordinates[i+1][1]]);

              //create the line's style
              var linieStyle = [
                          // linestring
                          new ol.style.Style({
                            stroke: new ol.style.Stroke({
                              color: 'red',
                              width: 2
                            })
                          })
                        ];

              //create the line       
              var linie = new ol.layer.Vector({
                      source: new ol.source.Vector({
                      features: [new ol.Feature({
                          geometry: new ol.geom.LineString([lonlat, location2]),
                          name: 'Line',
                      })]
                  })
              });

              //set the style and add to layer
              linie.setStyle(linieStyle);
              map.addLayer(linie);
    }         
      }

         
  }

 }
if(document.getElementById('state_name').value=='Uttarakhand'){
   console.log("uttarakhand")
      for (var k=0;k<utarray.length-1;k++){
      for(var i=0;i<allData[0].features[utarray[k]].geometry.coordinates.length-1;i++){
      var lonlat = ol.proj.fromLonLat([allData[0].features[utarray[k]].geometry.coordinates[i][0], allData[0].features[utarray[k]].geometry.coordinates[i][1]]);
              var location2 = ol.proj.fromLonLat([allData[0].features[utarray[k]].geometry.coordinates[i+1][0], allData[0].features[utarray[k]].geometry.coordinates[i+1][1]]);

              //create the line's style
              var linieStyle = [
                          // linestring
                          new ol.style.Style({
                            stroke: new ol.style.Stroke({
                              color: 'red',
                              width: 2
                            })
                          })
                        ];

              //create the line       
              var linie = new ol.layer.Vector({
                      source: new ol.source.Vector({
                      features: [new ol.Feature({
                          geometry: new ol.geom.LineString([lonlat, location2]),
                          name: 'Line',
                      })]
                  })
              });

              //set the style and add to layer
              linie.setStyle(linieStyle);
              map.addLayer(linie);
    }         
      }

      
  }

if(document.getElementById('state_name').value==='Himachal Pradesh'){

      for(var k=0;k<Hp.length-1;k++){
      for(var i=0;i<allData[0].features[Hp[k]].geometry.coordinates.length-1;i++){
      var lonlat = ol.proj.fromLonLat([allData[0].features[Hp[k]].geometry.coordinates[i][0], allData[0].features[Hp[k]].geometry.coordinates[i][1]]);
              var location2 = ol.proj.fromLonLat([allData[0].features[Hp[k]].geometry.coordinates[i+1][0], allData[0].features[Hp[k]].geometry.coordinates[i+1][1]]);

              //create the line's style
              var linieStyle = [
                          // linestring
                          new ol.style.Style({
                            stroke: new ol.style.Stroke({
                              color: 'red',
                              width: 2
                            })
                          })
                        ];

              //create the line       
              var linie = new ol.layer.Vector({
                      source: new ol.source.Vector({
                      features: [new ol.Feature({
                          geometry: new ol.geom.LineString([lonlat, location2]),
                          name: 'Line',
                      })]
                  })
              });

              //set the style and add to layer
              linie.setStyle(linieStyle);
              map.addLayer(linie);
      }         
      }
    }
    if(document.getElementById('state_name').value==='Jammu kashmir'){
      for(var k=0;k<jkarray.length-1;k++){
      for(var i=0;i<allData[0].features[jkarray[k]].geometry.coordinates.length-1;i++){
      var lonlat = ol.proj.fromLonLat([allData[0].features[jkarray[k]].geometry.coordinates[i][0], allData[0].features[jkarray[k]].geometry.coordinates[i][1]]);
              var location2 = ol.proj.fromLonLat([allData[0].features[jkarray[k]].geometry.coordinates[i+1][0], allData[0].features[jkarray[k]].geometry.coordinates[i+1][1]]);

              //create the line's style
              var linieStyle = [
                          // linestring
                          new ol.style.Style({
                            stroke: new ol.style.Stroke({
                              color: 'red',
                              width: 2
                            })
                          })
                        ];

              //create the line       
              var linie = new ol.layer.Vector({
                      source: new ol.source.Vector({
                      features: [new ol.Feature({
                          geometry: new ol.geom.LineString([lonlat, location2]),
                          name: 'Line',
                      })]
                  })
              });

              //set the style and add to layer
              linie.setStyle(linieStyle);
              map.addLayer(linie);
      }         
      }   
    }
})

var popup = new ol.Overlay({
  element: document.getElementById('popup'),
  });
  map.addOverlay(popup);
  map.on('click', function (evt) {
  var element = popup.getElement();
  var coordinate = evt.coordinate;
  var hdms = ol.coordinate.toStringHDMS(ol.proj.toLonLat(coordinate));
  console.log(element);
  $(element).popover('dispose');
  popup.setPosition(coordinate);
  $(element).popover({
  container: element,
  placement: 'top',
  animation: false,
  html: true,
  content: '<p>The location you clicked was:</p><code>' + hdms + '</code>',
  });
  $(element).popover('show');
 }); 

