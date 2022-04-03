
// window.onscroll = function() {myFunction()};

var header = document.querySelector("#header");
  // home and kitchen data

  var hkData = [

    { id:1,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211101/kxha/617fd84ef997ddf8f1f4c03d/buta_buti_yellow_floral_printed__anarkali_kurta_set.jpg",
      tag: "Buta Buti",
      name: "Floral Printed Anarkali Kurta Set",
      price: "₹1,649",
      strikedoffprice: "₹2,999",
      discount : "(45% off)",
      offer: "₹1,138",
      
    },
    { id:2,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210901/XdnA/612fa15faeb269a26885b908/indie_picks_green_pure_silk_khatan_tie_and_dye_bandhani_dupatta.jpg",
      tag: "Indie Picks",
      name: "Pure Silk Khatan Tie and Dye Bandhani Dupatta",
      price: "₹820",
      strikedoffprice: "₹1,999",
      discount : "(59% off)",
      offer: "₹662",
     
    },
    {id:3,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220228/o3h8/621c8e10aeb26921afb9f807/sajasajo_yellow_bengal_handloom_jamdani_saree.jpg",
      tag: "Sajasajo",
      name: "Bengal Handloom Jamdani saree",
      price: "₹3,420",
      strikedoffprice: "₹11,400",
      discount : "(70% off)",
      offer: "₹3,420",
     
    },
    {id:4,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220215/fTvy/620b74fdaeb26921af98fb75/arteastri_pink_handloom_woven_mul_cotton_jamdani_dupatta.jpg",
      tag: "ArtEastri",
      name: "Woven Mul Cotton Jamdani Dupatta",
      price: "₹1,913",
      strikedoffprice: "₹2,250",
      discount : "(15% off)",
      offer: "₹1,492",
      
    },
    {id:5,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211126/4WcG/61a0f6edf997ddf8f11d0d60/indie_picks_pink_3-piece_bagru_hand_block_print_unstitched_dress_material.jpg",
      tag: "Indie Picks",
      name: "3-piece Bagru Hand Block Print Unstitched Dress Material",
      price: "₹1,549",
      strikedoffprice: "₹2,499",
      discount : "(38% off)",
      offer: "₹1,208",
     
    },
    {id:6,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220114/JydO/61e16ebcaeb2695cdd1583ea/indie_picks_blue_handloom_bhagalpur_pure_linen_dupatta.jpg",
      tag: "Indie Picks",
      name: "Handloom Bhagalpur Pure Linen Dupatta",
      price: "₹1,139",
      strikedoffprice: "₹1,999",
      discount : "(43% off)",
      offer: "₹820",
      
    },
    {id:7,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210706/wbKa/60e37fc8f997ddb3121c1984/buta_buti_orange_floral_print_cotton_saree.jpg",
      tag: "Buta Buti",
      name: "Floral Print Cotton Saree",
      price: "₹1,399",
      strikedoffprice: "₹1,999",
      discount : "(30% off)",
      offer: "₹965",
      
    },
    {id:8,
      image_url:"https://assets.ajio.com/medias/sys_master/root/20201021/0r8G/5f8fc347aeb269d563e8a1c4/molcha_off_white_front_open_short_sleeves_blouse.jpg"
      ,tag: "Molcha",
      name: "Front Open Short Sleeves Blouse",
      price: "₹840",
      strikedoffprice: "₹2,099",
      discount : "(60% off)",
      offer: "672",
      
    },
    {id:9,
      image_url:"https://assets.ajio.com/medias/sys_master/root/20210703/Axmv/60dfb4aaf997ddb3121aaf1c/buta_buti_white_tie_%26_dye_cotton_saree.jpg",
      tag: "Buta Buti",
      name: "Tie & Dye Cotton Saree",
      price: "₹1,399",
      strikedoffprice: "₹1,999",
      discount : "(30% off)",
      offer: "₹965",
      
    },
    {id:10,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210730/yPBq/61039fbdf997ddb31240b0d6/buta_buti_black_striped_cotton_saree.jpg",
      tag: "Buta Buti",
      name: "Stripped Cotton Saree",
      price: "₹1,399",
      strikedoffprice: "₹1,999",
      discount : "(30% off)",
      offer: "₹965",
     
    },
    {id:11,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220305/ahqW/62226944aeb26921afc86d2a/indie_picks_blue_handblock_print_ajrak_barmer_modal_dupatta.jpg",
      tag: "Indie Picks",
      name: "Handblock Print Ajrak Barmer Modal Dupatta",
      price: "₹2,499",
      strikedoffprice: "",
      discount : "",
      offer: "₹1,799",
      
    },
    
    {id:12,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211206/IyT6/61ae0252f997ddf8f138d7bf/bengal_handloom_white_handloom_soft_cotton_art_silk_dhakai_jacquard_jamdani_saree_saree.jpg",
      tag: "BENGAL HANDLOOM",
      name: "Handloom Soft Cotton Art Silk Dhakai Jacquard Jamdani Saree",
      price: "₹1,155",
      strikedoffprice: "₹3,849",
      discount : "(70% off)",
      offer: "₹1,155",
      
    },
    {id:13,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220205/OwKc/61fd8e00aeb26921af8aeea1/indie_picks_grey_handloom_narayanpet_pure_cotton_saree_with_contrast_temple_border.jpg",
      tag: "Indie Picks",
      name: "Handloom Narayanpet Pure Cotton Saree with Contrast Temple Border",
      price: "₹1,674",
      strikedoffprice: "₹2,499",
      discount : "(33% off)",
      offer: "₹1,205",
      
    },
    {id:14,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211230/1PsF/61ccb5fcaeb2690110231004/indie_picks_cream_striped_handloom_bhagalpur_pure_linen_dupatta_with_tassels.jpg",
      tag: "Indie Picks",
      name: "Stripped Handloom Bhagalpur Pure Linen Dupatta",
      price: "₹1,159",
      strikedoffprice: "₹1,999",
      discount : "(42% off)",
      offer: "₹834",
     
    },
    {id:15,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210421/wcXf/607f7473aeb269a9e3991982/ancestry_black_ankle_length__relaxed_fit_pant.jpg",
      tag: "Ancestry",
      name: "Ankle Length Relaxed Fit Pant",
      price: "₹1,990",
      strikedoffprice: "",
      discount : "",
      offer: "₹1,552",
     
    },
    {id:16,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211118/kDCr/61969685aeb2690110cc42c2/molcha_by_babita_singh_black_floral_print_dupatta_with_tassels.jpg",
      tag: "Molcha by Babita Singh",
      name: "Floral Print Dupatta with Tassels",
      price: "₹599",
      strikedoffprice: "₹999",
      discount : "(40% off)",
      offer: "413",
      
    },
    {id:17,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210707/QSQA/60e4ec65f997ddb3121f1078/buta_buti_red_leaf_print_cotton_saree_.jpg",
      tag: "Buta Buti",
      name: "Leaf Print Cotton Saree",
      price: "₹1,399",
      strikedoffprice: "₹1,999",
      discount : "(30% off)",
      offer: "₹965",
      
    },
    {id:18,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220207/7tJ8/62014230aeb26921af8d06f4/indie_picks_yellow_south_cotton_three-piece_dress_material_with_zari_border.jpg",
      tag: "Indie Picks",
      name: "South Cotton Three-Piece Dress Material with Zari Border",
      price: "₹1,119",
      strikedoffprice: "₹1,599",
      discount : "(30% off)",
      offer: "₹806",
      
    },
    {id:19,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220207/AA7T/6201401caeb26921af8cea42/indie_picks_red_south_cotton_three-piece_dress_material_with_zari_border.jpg",
      tag: "Indie Picks",
      name: "South Cotton Three-Piece Dress Material with Zari Border",
      price: "₹1,087",
      strikedoffprice: "₹1,599",
      discount : "(32% off)",
      offer: "₹783",
      
    },
    {id:20,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211125/UJKe/619e8826f997ddf8f119d878/indie_picks_blue_handblock_print_slim_fit_shirt_with_mandarin_collar.jpg",
      tag: "Indie Picks",
      name: "Handblock Print Slim Fit Shirt with Mandarin Collar",
      price: "₹810",
      strikedoffprice: "₹1,799",
      discount : "(55% off)",
      offer: "₹594",
      
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
     
     var sPrice = document.createElement("p");
     sPrice.innerText = elem.strikedoffprice;
     sPrice.style.textDecoration = "line-through"
     

      var offer = document.createElement("p");
      offer.innerText = elem.offer;
    var fl = document.createElement("div");
    fl.style.display = "flex";
    fl.style.paddingTop = "10px"
    fl.style.justifyContent="space-evenly"
    fl.style.marginTop = "-30px"
      var num=elem.price.substr(1)
      num=num.replace(",", "")
      elem.accnum=num;
    

      var discount = document.createElement("p");
      discount.innerText = elem.discount;
      discount.style.color="#b29a76"
      box.style.textAlign = "center"
      fl.append(price,sPrice,discount)
      box.append(img, tag, name,fl );
  
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



  