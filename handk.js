
// window.onscroll = function() {myFunction()};

var header = document.querySelector("#header");
  // home and kitchen data

  var hkData = [

    { id:1,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211109/8lR5/618aa783f997ddf8f1ff477a/home_centre_beige_printed_stoneware_small_coffee_mug.jpg",
      tag: "Home Centre",
      name: "Printed Stoneware Small Coffee Mug",
      price: "₹297",
      strikedoffprice: "₹349",
      discount : "(15% off)",
      offer: "Offer Price: ₹297",
    },
    { id:2,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211021/bSo7/617149b2f997ddf8f1df4b6a/good_homes_brown_room_darkening_dual_panel__window_curtain_set_of_2.jpg",
      tag: "Good Homes",
      name: "Room Darkening Dual Panel Window Curtain Set of 2",
      price: "₹480",
      strikedoffprice: "₹1,199",
      discount : "(60% off)",
      offer: "Offer Price: ₹324",
    },
    {id:3,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211128/I4Z7/61a3306ef997ddf8f120d296/shades_of_life_blue_set_of_2_embroidered_cushion_cover_16%27%27_x_16%27%27.jpg",
      tag: "Shades Of Life",
      name: "Set of 2 Embroidered Cushion Cover 16x16 ",
      price: "₹1,140",
      strikedoffprice: "₹1,200",
      discount : "(5% off)",
      offer: "Offer Price: ₹936",
    },
    {id:4,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211012/J9Tz/6165bf8df997dd3ed46cddcd/portico_multicoloured_happiness_is_collection_super_king_size_bedsheet_with_2_pillow_covers.jpg",
      tag: "PORTICO",
      name: "Happiness Is Collection Super King Size Bedsheet with 2 Pillow Covers",
      price: "₹2,337",
      strikedoffprice: "₹2,749",
      discount : "(15% off)",
      
    },
    {id:5,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210827/Sqx9/61292ca2aeb269a26880ca58/portico_multicoloured_melange_printed_single_reversible_comforter.jpg",
      tag: "PORTICO",
      name: "Melange Printed Single Reversible Comforter",
      price: "₹1,799",
      strikedoffprice: "₹2,999",
      discount : "(40% off)",
      
    },
    {id:6,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220315/dYkk/622fa8c4aeb26921afd82fca/rosarahome_grey_%26_clear_pack_of_4_printed_door_curtains.jpg",
      tag: "Rosarahome",
      name: "Pack of 4 Printed Door Curtains",
      price: "₹4,479",
      strikedoffprice: "₹6,399",
      discount : "(30% off)",
      offer: "Offer Price: ₹3.494",
    },
    {id:7,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220114/OdlB/61e08d45f997dd6623208bb9/decorealm_pink_300_tc_poly_satin_king_bedsheet_with_pillow_covers.jpg",
      tag: "DECOREALM",
      name: "300 TC Poly Satin King Bedsheet with Pillow Covers",
      price: "₹2,246",
      strikedoffprice: "₹4,990",
      discount : "(55% off)",
      offer: "Offer Price: ₹1,437",
    },
    {id:8,
      image_url:"https://assets.ajio.com/medias/sys_master/root/20210506/45E8/6093ff41aeb269a9e3b4f1cf/houzzcode_grey_printed_blackout_door_curtain.jpg"
      ,tag: "Houzzcode",
      name: "Printed Blackout Door Curtain",
      price: "₹1,259",
      strikedoffprice: "₹2,099",
      discount : "(40% off)",
      offer: "Offer Price: ₹806",
    },
    {id:9,
      image_url:"https://assets.ajio.com/medias/sys_master/root/20211116/qeuw/6192b34daeb2690110c55778/good_homes_navy_heart_printed_bed_sheet_%26_pillow_covers.jpg",
      tag: "Good Homes",
      name: "Heart Printed Bed Sheet & Pillow Covers",
      price: "₹540",
      strikedoffprice: "₹1,199",
      discount : "(55% off)",
      offer: "Offer Price: ₹346",
    },
    {id:10,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220215/I3w4/620bc610aeb26921af99f884/portico_aqua_cotton_queen-size_comforter.jpg",
      tag: "PORTICO",
      name: "Cotton Queen-Size Comforter",
      price: "₹2,000",
      strikedoffprice: "₹3,999",
      discount : "(50% off)",
      
    },
    {id:11,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211024/nW9T/617578a5aeb2690110a6f567/home_centre_white_textured_foam_pillow.jpg",
      tag: "Home Centre",
      name: "Textured Foam Pillow",
      price: "₹3,824",
      strikedoffprice: "₹4,499",
      discount : "(15% off)",
      offer: "Offer Price: ₹3,824",
    },
    
    {id:12,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220207/DDGy/6201425aaeb26921af8d092e/indie_picks_white_hand_embroidered_cotton_cushion_cover_16%22_x_16%22.jpg",
      tag: "Indie Picks",
      name: "hand Embroidered Cotton Cushion Cover",
      price: "₹479",
      strikedoffprice: "₹799",
      discount : "(40% off)",
      offer: "Offer Price: ₹345",
    },
    {id:13,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211108/8cNS/61890b17f997ddf8f1fb2a2a/home_centre_pink_artificial_lotus_bud.jpg",
      tag: "Home Centre",
      name: "Artificial Lotus Bud",
      price: "₹254",
      strikedoffprice: "₹299",
      discount : "(15% off)",
      offer: "Offer Price: ₹254",
    },
    {id:14,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211013/L0mj/616630edf997ddf8f1ce175f/portico_multicoloured_happiness_is_collection_super_king_size_bedsheet_with_2_pillow_covers.jpg",
      tag: "PORTICO",
      name: "Happiness Is Collection Super King Size Bedsheet",
      price: "₹2,749",
      
    },
    {id:15,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220121/BKaS/61ea6e30aeb2695cdd259aa0/home_sizzler_brown_set_of_2_leaf_panel_eyelet_door_curtains.jpg",
      tag: "Home Sizzler",
      name: "Set of 2 Leaf Panel Eyelet Door Curtains",
      price: "₹499",
      strikedoffprice: "₹799",
      discount : "(40% off)",
      offer: "Offer Price: ₹374",
    },
    {id:16,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210825/Io01/612558347cdb8cb82404f23a/portico_new_york_multicoloured_120_gsm_floral_print_king_size_reversible_comforter.jpg",
      tag: "PORTICO NEW YORK",
      name: "120 GSM FLoral Print King Size Reversible",
      price: "₹2,519",
      strikedoffprice: "₹4,199",
      discount : "(40% off)",
      offer: "Offer Price: ₹2,519",
    },
    {id:17,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211101/vzRH/617fe509aeb2690110b53929/home_centre_gold_wall_mounted_t-light_holder.jpg",
      tag: "Home Centre",
      name: "Wall Mounted T-light Holder",
      price: "₹1,869",
      strikedoffprice: "₹2,199",
      discount : "(15% off)",
      offer: "Offer Price: ₹1,869",
    },
    {id:18,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211129/cyRJ/61a50eb7f997ddf8f1243471/home_centre_green_courage_beaded_glass_placemat.jpg",
      tag: "Home Centre",
      name: "Courage Beaded Glass Placemat",
      price: "₹594",
      strikedoffprice: "₹699",
      discount : "(15% off)",
      offer: "Offer Price: ₹594",
    },
    {id:19,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220302/zhO6/621f3242f997dd03e2fc768c/marks_%26_spencer_grey_egyptian_cotton_230_tc_flat_bedsheet.jpg",
      tag: "Marks & Spencer",
      name: "Egyptian Cotton 230 TC Flat Bedsheet",
      price: "₹2,499",
      
      
    },
    {id:20,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210921/Z9dC/6148fcdcaeb269a2689a41ba/portico_multicoloured_shalimaar_printed_reversible_king-size_comforter.jpg",
      tag: "PORTICO",
      name: "SHalimaar Printed Reversible King-Size Comforter",
      price: "₹2,519",
      strikedoffprice: "₹2,199",
      discount : "(40% off)",
      
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



  