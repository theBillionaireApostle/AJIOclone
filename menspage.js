
// window.onscroll = function() {myFunction()};

var header = document.querySelector("#header");
  // home and kitchen data

  var hkData = [
    { id:1,
      image_url: "https://assets.ajio.com/medias/sys_master/root/h47/hb8/14876616851486/dnmx_black_mid-rise_fitted_jeans.jpg",
      tag: "DNMX",
      name: "Mid-Rise Fitted Jeans",
      price: "₹679",
      strikedoffprice: "₹799",
      discount : "(15% off)",
      offer: "Offer Price: ₹639",
    },
    { id:2,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220301/TPXo/621d1530f997dd03e2f5346e/campus_grey_%26_orange_rollz_lace-up_running_shoes_with_contrast_heel_panel.jpg",
      tag: "CAMPUS",
      name: "Rollz Lace-up Running Shoes with Contrast Heel Panel",
      price: "₹1,199",
      strikedoffprice: "₹1,599",
      discount : "(25% off)",
      offer: "Offer Price: ₹839",
    },
    {id:3,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20200723/CFmP/5f19acf37cdb8c2207843537/crocs_navy_bayaband_slingback_clogs.jpg",
      tag: "CROCS",
      name: "Bayaband Slingback Clogs",
      price: "₹2,447",
      strikedoffprice: "₹3,495",
      discount : "(30% off)",
      offer: "Offer Price: ₹1,713",
    },
    {id:4,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211013/uqO3/616622b1f997ddf8f1cd31ca/dillinger_green_colourblock_crew-_neck_t-shirt.jpg",
      tag: "DILLINGER",
      name: "Colourblock Crew-Neck T-shirt",
      price: "₹500",
      strikedoffprice: "₹1,249",
      discount : "(60% off)",
      offer: "Offer Price: ₹337",
    },
    {id:5,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220125/NdPb/61ef13c0aeb2695cdd2bb6b8/performax_black_fastdry_active_panelled_track_pants.jpg",
      tag: "PERFORMAX",
      name: "Fastdry Active Pannelled Track Pants",
      price: "₹639",
      strikedoffprice: "₹799",
      discount : "(20% off)",
      offer: "Offer Price: ₹599",
    },
    {id:6,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211231/oigB/61ce3c65aeb2695cddff3308/garcon_red_polo_t-shirt_with_spread_collar.jpg",
      tag: "Garcon",
      name: "Polo T-shirt with Spread Collar",
      price: "₹420",
      strikedoffprice: "₹1,199",
      discount : "(65% off)",
      offer: "Offer Price: ₹384",
    },
    {id:7,
      image_url: "https://assets.ajio.com/medias/sys_master/root/h79/h02/10267307016222/netplay_black_slim_fit_mid-rise_chinos.jpg",
      tag: "NETPLAY",
      name: "Slim Fit Mid-Rise Chinos",
      price: "₹799",
      strikedoffprice: "₹999",
      discount : "(20% off)",
      offer: "Offer Price: ₹749",
    },
    {id:8,
      image_url:"https://assets.ajio.com/medias/sys_master/root/20211104/01A4/6182d768aeb2690110b95a57/red_tape_navy_blue_textured_lace-up_sports_shoes.jpg"
      ,tag: "RED TAPE",
      name: "Textured Lace-Up Sports Shoes",
      price: "₹2,190",
      strikedoffprice: "₹7,299",
      discount : "(70% off)",
      offer: "Offer Price: ₹2,190",
    },
    {id:9,
      image_url:"https://assets.ajio.com/medias/sys_master/root/20211228/7icQ/61ca2db2aeb26901101f06cb/netplay_olive_green_jacquard-woven_slim_fit_polo_t-shirt.jpg",
      tag: "NETPLAY",
      name: "Jacquard-Woven Slim Fit Polo T-shirt",
      price: "₹639",
      strikedoffprice: "₹799",
      discount : "(20% off)",
      offer: "Offer Price: ₹599",
    },
    {id:10,
      image_url: "https://assets.ajio.com/medias/sys_master/root/h1d/h2e/15885260521502/dennislingo_premium_attire_blue_checked_slim_fit_shirt.jpg",
      tag: "DENNISLINGO PREMIUM ATTIRE",
      name: "Checked Slim Fit Shirt",
      price: "₹775",
      strikedoffprice: "₹2,499",
      discount : "(69% off)",
      offer: "Offer Price: ₹675",
    },
    {id:11,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20200723/6a8B/5f19adde7cdb8c2207844302/crocs_white_bayaband_clogs_with_slingback.jpg",
      tag: "CROCS",
      name: "Bayaband Clogs with Slingback",
      price: "₹2,447",
      strikedoffprice: "₹3,495",
      discount : "(30% off)",
      offer: "Offer Price: ₹1,713",
    },
    
    {id:12,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220125/PQGG/61eef764f997dd662337fd2b/netplay_white_striped_button-down_t-shirt.jpg",
      tag: "NETPLAY",
      name: "Striped Button-Down T-shirt",
      price: "₹594",
      strikedoffprice: "₹699",
      discount : "(15% off)",
      offer: "Offer Price: ₹559",
    },
    {id:13,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211009/Zkz6/61610103aeb2692b85bef82c/lee_cooper_blue_mid-rise_washed_slim_fit_jeans.jpg",
      tag: "Lee Cooper",
      name: "Mid-Rise Washed Slim Fit Jeans",
      price: "₹800",
      strikedoffprice: "₹1,599",
      discount : "(50% off)",
      offer: "Offer Price: ₹800",
    },
    {id:14,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211019/Hn3u/616dc911aeb269011099ea26/campus_white_cassidy_lace-up_sneakers.jpg",
      tag: "Campus",
      name: "Cassidy Lace-Up Sneakers",
      price: "₹1,279",
      strikedoffprice: "₹1,599",
      discount : "(20% off)",
      offer: "Offer Price: ₹1,199",
    },
    {id:15,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220212/o26y/6206bd3bf997dd03e2ccbd75/levis_blue_washed_slim_fit_jeans.jpg",
      tag: "Levis",
      name: "Washed Slim Fit Jeans",
      price: "₹1,559",
      strikedoffprice: "₹2,599",
      discount : "(40% off)",
      offer: "Offer Price: ₹1,325",
    },
    {id:16,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210917/UdOX/6143d291aeb269a2689520c4/brooks_brothers_blue_striped_slim_fit_polo_t-shirt.jpg",
      tag: "BROOKS BROTHERS",
      name: "Striped Slim Fit Polo T-shirt",
      price: "₹5,500",
      strikedoffprice: "₹10,000",
      discount : "(45% off)",
      offer: "Offer Price: ₹4,400",
    },
    {id:17,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211228/2WN1/61ca2003f997ddf8f1637a00/netplay_grey_slim_fit_flat-front_trousers.jpg",
      tag: "NETPLAY",
      name: "Slim Fit Flat-Front Trousers",
      price: "₹849",
      strikedoffprice: "₹999",
      discount : "(15% off)",
      offer: "Offer Price: ₹799",
    },
    {id:18,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211013/NiBc/6166262baeb26901108e7692/puma__poly_cotton_cap_ind.jpg",
      tag: "Puma",
      name: "Poly Cotton Cap IND",
      price: "₹450",
      strikedoffprice: "₹899",
      discount : "(50% off)",
      offer: "Offer Price: ₹351",
    },
    {id:19,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210724/NHOm/60fb3cd6f997ddb312375f4d/brooks_brothers_blue_checked_non-iron_stretch_regent_sport_shirt.jpg",
      tag: "BROOKS BROTHERS",
      name: "Checked Non-Iron Stretch Regent Sport Shirt",
      price: "₹5,200",
      strikedoffprice: "₹10,000",
      discount : "(48% off)",
      
    },
    {id:20,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210403/dboC/6068dc56aeb269a9e33a5431/dennislingo_premium_attire_green_slim_fit_shirt_with_checked_detail.jpg",
      tag: "DENNISLINGO PREMIUM ATTIRE",
      name: "Slim Fit Shirt with Checked Detail",
      price: "₹775",
      strikedoffprice: "₹2,499",
      discount : "(69% off)",
      offer: "Offer Price: ₹675",
    }
    ];

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



  