
// window.onscroll = function() {myFunction()};

var header = document.querySelector("#header");
  // home and kitchen data

  var hkData = [

    { id:1,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210802/E4tH/6107e6b4f997ddb312438efa/kb_team_spirit_blue_typographic_print_sleeveless_crew-neck_t-shirt.jpg",
      tag: "KB TEAM SPIRIT",
      name: "Typographic Print Sleeveless Crew-Neck T-Shirt",
      price: "₹89",
      strikedoffprice: "₹149",
      discount : "(40% off)",
      offer: "",
      
    },
    { id:2,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210405/v6gW/606c8e3faeb269a9e3840a92/kb_team_spirit__printed_shorts_with_drawstring_waist.jpg",
      tag: "KB TEAM SPIRIT",
      name: "Floral Printed Straight Kurta Set",
      price: "₹782",
      strikedoffprice: "₹499",
      discount : "(77% off)",
      offer: "₹170",
     
    },
    {id:3,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220221/mbUm/62138925f997dd03e2dd8704/kb_team_spirit_blue_graphic_print_crew-neck_t-shirt.jpg",
      tag: "KB TEAM SPIRIT",
      name: "Graphic Print Crew-Neck T-shirt",
      price: "₹125",
      strikedoffprice: "₹149",
      discount : "(16% off)",
      offer: "₹112",
     
    },
    {id:4,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210923/AtjI/614b7737aeb269a2689f6d6e/youbella_pink_hair_accessories_set.jpg",
      tag: "Youbella",
      name: "Hair Accessories Set",
      price: "₹270",
      strikedoffprice: "₹999",
      discount : "(73% off)",
      offer: "₹270",
      
    },
    {id:5,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210702/hkKF/60df2a7df997ddb3121916bf/kb_team_spirit_multicoloured_colourblock_shirt_with_welt_pocket.jpg",
      tag: "KB TEAM SPIRIT",
      name: "Colourblock Shirt with Welt Pocket",
      price: "₹359",
      strikedoffprice: "₹599",
      discount : "(40% off)",
      offer: "₹300",
     
    },
    {id:6,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210604/0OSQ/60ba4338aeb269a9e3d576bd/u.s._polo_assn._khaki_flat-front_trousers_with_insert_pockets.jpg",
      tag: "U.S.Polo Assn.",
      name: "Flat-Front Trousers with Insert Pockets",
      price: "₹760",
      strikedoffprice: "₹1899",
      discount : "(60% off)",
      offer: "₹760",
      
    },
    {id:7,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211006/bA1G/615da20ef997ddce890379d2/kg_frendz_white_%26_blue_sequin_embellished_tulle_flared_dress.jpg",
      tag: "KG FRENDZ",
      name: "Squin Embellished Tulle Flared Dress",
      price: "₹419",
      strikedoffprice: "₹599",
      discount : "(30% off)",
      offer: "₹359",
      
    },
    {id:8,
      image_url:"https://assets.ajio.com/medias/sys_master/root/20200725/5KpN/5f1c4e4a7cdb8c220785996d/united_colors_of_benetton_navy_blue_typographic_print_sleeveless_t-shirt.jpg"
      ,tag: "UNITED COLORS OF BENETION",
      name: "Typographic Print Sleeveless T-shirt",
      price: "₹274",
      strikedoffprice: "₹499",
      discount : "(45% off)",
      offer: "",
      
    },
    {id:9,
      image_url:"https://assets.ajio.com/medias/sys_master/root/20220302/H4ZH/621fa9e4aeb26921afc34cf4/hellcat_multi_pack_of_5__crew-_neck_t-shirt.jpg",
      tag: "Hellcat",
      name: "Pack of 5 Crew-Neck T-shirt",
      price: "₹849",
      strikedoffprice: "₹4,995",
      discount : "(83% off)",
      offer: "₹849",
      
    },
    {id:10,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210527/5geY/60afb462f997ddb312ab6962/kg_frendz__schiffli_embroidered_shorts_with_lace_hems.jpg",
      tag: "KG FRENDZ",
      name: "Schiffli Embroidered Shorts with Lace Hems",
      price: "₹240",
      strikedoffprice: "₹499",
      discount : "(52% off)",
      offer: "₹170",
     
    },
    {id:11,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211229/dllG/61cc5737aeb2690110226fd4/kg_frendz_pink_shorts_with_contrast_taping.jpg",
      tag: "KG FRENDZ",
      name: "Shorts with Contrast Taping",
      price: "₹144",
      strikedoffprice: "₹299",
      discount : "(52% off)",
      offer: "₹102",
      
    },
    
    {id:12,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220125/Umr8/61eef6dcf997dd662337fa5a/performax_black_striped_bermuda_shorts_with_drawstring_waist.jpg",
      tag: "PERFORMAX",
      name: "Striped Bermuda Shorts with Drawstring Waist",
      price: "₹489",
      strikedoffprice: "₹699",
      discount : "(30% off)",
      offer: "₹419",
      
    },
    {id:13,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210824/1lHf/61240020f997ddce89a88dfd/tommy_hilfiger_olive_green_organic_cotton_shorts_with_insert_pocket.jpg",
      tag: "TOMMY HILFIGER",
      name: "Organic Cotton Shorts with Insert Pocket",
      price: "₹1,959",
      strikedoffprice: "₹2,799",
      discount : "(30% off)",
      offer: "₹1,665",
      
    },
    {id:14,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211122/QoUU/619b8d49aeb2690110cf3f11/kb_team_spirit_red_placement_print_henley_t-shirt.jpg",
      tag: "KB TEAM SPIRIT",
      name: "Placement Print Henley T-shirt",
      price: "₹174",
      strikedoffprice: "₹249",
      discount : "(30% off)",
      offer: "₹149",
     
    },
    {id:15,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220301/08Br/621e09d7aeb26921afbe21ab/hellcat_multicoloured_pack_of_5_printed_crew-neck_t-shirts.jpg",
      tag: "Hellcat",
      name: "Pack of 5 Crew-Neck T-shirt",
      price: "₹849",
      strikedoffprice: "₹4,995",
      discount : "(83% off)",
      offer: "₹849",
     
    },
    {id:16,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210415/Ycsu/6078326baeb269a9e3924f50/kg_frendz_blue_capris_with_elasticated_waist.jpg",
      tag: "KG FRENDZ",
      name: "Capris with Elasticated Waist",
      price: "₹188",
      strikedoffprice: "₹149",
      discount : "(41% off)",
      offer: "",
      
    },
    {id:17,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210923/BOX6/614b7f50f997ddce89d77408/youbella_grey_hair_accessories_set.jpg",
      tag: "Youbella",
      name: "Hair Accessories Set",
      price: "₹270",
      strikedoffprice: "₹999",
      discount : "(73% off)",
      offer: "₹270",
      
    },
    {id:18,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210415/BYPL/60783450f997dd7b64b2e775/kg_frendz__graphic_print_round-neck_t-shirt.jpg",
      tag: "KG FRENDZ",
      name: "Graphic Print Round-Neck T-shirt",
      price: "₹117",
      strikedoffprice: "₹199",
      discount : "(41% off)",
      offer: "₹100",
      
    },
    {id:19,
      image_url: "https://assets.ajio.com/medias/sys_master/root/h21/h9b/13250105770014/kb_team_spirit_black_mid-rise_relaxed_fit_jeans.jpg",
      tag: "KB TEAM SPIRIT",
      name: "Mid-Rise Relaxed Fit Jeans",
      price: "₹419",
      strikedoffprice: "₹499",
      discount : "(16% off)",
      offer: "₹374",
      
    },
    {id:20,
      image_url: "https://assets.ajio.com/medias/sys_master/root/h14/h02/16527671525406/kb_team_spirit_grey_numeric_print_shorts_with_contrast_elasticated_drawstring_waist.jpg",
      tag: "KB TEAM SPIRIT",
      name: "numeric Print Shorts with Contrast Elasticate Drawstring Waist",
      price: "₹174",
      strikedoffprice: "₹249",
      discount : "(30% off)",
      offer: "₹149",
      
    }];

   window.addEventListener("load", function(){
     
    ocsr(hkData)
   })
   //sorting-----------------------------------
   
  function sortbn(){
      var changval = document.querySelector("#sb").value;
      //console.log(changval);
    if(changval=="ass"){
        hkData.sort(function(a,b){
         return (a.accnum)-(b.accnum);
        })
        document.querySelector("#datains").innerHTML=""
       console.log(hkData)
       console.log(changval);
      

       ocsr(hkData)
       
       
    }
    if(changval=="dec"){
      hkData.sort(function(a,b){
        return (b.accnum)-(a.accnum);
       })
       document.querySelector("#datains").innerHTML=""
      console.log(hkData)
      console.log(changval);
      
      ocsr(hkData)
      
     
    }
    else{
      ocsr(hkData)
    }
  }

function displaydata(hkData){
  hkData.map(function (elem) {

    

    var box = document.createElement("div");  
    var img = document.createElement("img");

    img.style.width="300px"
    img.src = elem.image_url;

    var tag = document.createElement("h2")
    tag.textContent=elem.tag;
    tag.style.color="#b29a76";
    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;
    price.style.fontWeight="bold";
     
     var sPrice = document.createElement("s");
     sPrice.innerText = elem.strikedoffprice;
     

      var offer = document.createElement("p");
      offer.innerText = elem.offer;


      var num=elem.price.substr(1)
      num=num.replace(",", "")
      elem.accnum=num;
    

      var discount = document.createElement("p");
      discount.innerText = elem.discount;
      discount.style.color="#b29a76"
      box.append(img, tag, name, price,sPrice,discount, offer);
  
       document.querySelector("#datains").append(box);
  
    });
  }
  
   
    
 
  function ocsr(hkData){
    document.querySelector("#datains").innerHTML=""
    var reserve=[];
    console.log("0")
    var s1 = document.querySelector("#Bel500")
    var s2 = document.querySelector("#be510")    
    var s3 = document.querySelector("#be10011500")    
    var s4 = document.querySelector("#be15012000")    
    var s5 = document.querySelector("#be20012500")    

   var count =0;
    if(s1.checked){
      count++;
       hkData.filter(function(ele){
         if(ele.accnum<501){
         reserve.push(ele)
         }
         
       })
       document.querySelector("#datains").innerHTML=""
       console.log("1")
       displaydata(reserve)
    }
    if(s2.checked){
      count++;
      hkData.filter(function(ele){
        if(ele.accnum>501 && ele.accnum<1000){
        reserve.push(ele)
        }
        
      })
      document.querySelector("#datains").innerHTML=""
      console.log("2")
      displaydata(reserve)
   }
   if(s3.checked){
    count++;
    hkData.filter(function(ele){
      if(ele.accnum>1001 && ele.accnum<1500){
      reserve.push(ele)
      }
    
    })
    document.querySelector("#datains").innerHTML=""
    console.log("3")
    displaydata(reserve)
 }
 if(s4.checked){
  count++;
  hkData.filter(function(ele){
    if(ele.accnum>1501 && ele.accnum<2000){
    reserve.push(ele)
    }
  
  })
  document.querySelector("#datains").innerHTML=""
  console.log("4")
  displaydata(reserve)
}
if(s5.checked){
  count++;
  hkData.filter(function(ele){
    if(ele.accnum>2001 && ele.accnum<2500){
    reserve.push(ele)
    }
  
  })
  document.querySelector("#datains").innerHTML=""
  console.log("5")
  displaydata(reserve)
}
    if(count==0){
     console.log("el")
      displaydata(hkData)
    }
  }



  