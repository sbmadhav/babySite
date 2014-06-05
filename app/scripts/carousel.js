'use strict';
/*global $:false */
var caro=(function carousel(){
               var images=[];
               var headings=[];
               var bodyTxt=[];
               var counter=0;
               var index;
               //alert("first");
               $.getJSON('JSON/carousel-data.json', function(data) {
              $.each(data,function(){
                         images.push(this.image);
                         headings.push(this.heading);
                         bodyTxt.push(this.text);
                         if(counter==0){
                           $('.caro-nav').append('<img id='+ counter + ' src="images/clicked-caro.png"/>');
                           }
                         else{
                         $('.caro-nav').append('<img id='+ counter + ' src="images/unclicked-caro.png"/>');
                           }
                         counter++;
                         });
               $('.caro-img img').attr('src',images[0]);
               $('.caro-heading').html(headings[0]);
               $('.caro-bodyText').html(bodyTxt[0]);
               $('.caro-nav img').click(function(){
                               var currentId=$(this).attr('id');
                               for(var i=0;i<counter;i++){
                                 $('#'+i).attr('src','images/unclicked-caro.png');
                                 }
                               $(this).attr('src','images/clicked-caro.png');
                               $('.caro-img img').attr('src',images[currentId]);
                               $('.caro-heading').html(headings[currentId]);
                               $('.caro-bodyText').html(bodyTxt[currentId]);
                        });
              $(".carousel-container").swipe({
                    swipe:function(event, direction, distance, duration, fingerCount) {
                    if(direction=='left'){
                      index=images.indexOf($(".caro-img").children('img').attr('src'));
                      for(var i=0;i<counter;i++){
                                 $('#'+i).attr('src','images/unclicked-caro.png');
                                 }
                      if(index==0){
                         $('.caro-img img').attr('src',images[counter-1]);
                        $('.caro-heading').html(headings[counter-1]);
                        $('.caro-bodyText').html(bodyTxt[counter-1]);
                        $('#'+(counter-1)).attr('src','images/clicked-caro.png');
                        }
                      else{
                         $('.caro-img img').attr('src',images[index-1]);
                         $('.caro-heading').html(headings[index-1]);
                         $('.caro-bodyText').html(bodyTxt[index-1]);
                         $('#'+(index-1)).attr('src','images/clicked-caro.png');
                        }
                      }
                      else if(direction=='right'){
                        index=images.indexOf($(".caro-img").children('img').attr('src'));
                        for(var i=0;i<counter;i++){
                                 $('#'+i).attr('src','images/unclicked-caro.png');
                                 }
                        if(index==counter-1){
                           $('.caro-img img').attr('src',images[0]);
                          $('.caro-heading').html(headings[0]);
                          $('.caro-bodyText').html(bodyTxt[0]);
                         $('#0').attr('src','images/clicked-caro.png');
                          }
                        else{
                           $('.caro-img img').attr('src',images[index+1]);
                           $('.caro-heading').html(headings[index+1]);
                           $('.caro-bodyText').html(bodyTxt[index+1]);
                         $('#'+(index+1)).attr('src','images/clicked-caro.png');
                          }
                        }
                    }
                  });
                          });
return carousel;
               })();