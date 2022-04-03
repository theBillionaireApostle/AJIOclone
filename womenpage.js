
// window.onscroll = function() {myFunction()};

var header = document.querySelector("#header");
  // home and kitchen data

  var hkData = [
    { id:1,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220124/8ATC/61eeae7af997dd662337baf6/gulmohar_jaipur_yellow_floral_printed_straight_kurta_set.jpg",
      tag: "GULMOHAR JAIPUR",
      name: "Floral Printed Straight Kurta Set",
      price: "₹1,299",
      strikedoffprice: "₹2,499",
      discount : "(48% off)",
      
    },
    { id:2,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211126/heXG/619ffea5aeb2690110da4eca/gosriki_white_floral_print_straight_kurta_set.jpg",
      tag: "GOSRIKI",
      name: "Floral Printed Straight Kurta Set",
      price: "₹782",
      strikedoffprice: "₹3,401",
      discount : "(77% off)",
     
    },
    {id:3,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210609/fKpe/60c0b8e3aeb269a9e3e2420a/whp_jewellers_yellow_gold_24kt_%28999%29_2_gm_yellow_gold_coin.jpg",
      tag: "Whp Jewellers",
      name: "24KT(999) 2gm Yellow Gold Coin",
      price: "₹10,894",
      strikedoffprice: "₹12,380",
      discount : "(12% off)",
     
    },
    {id:4,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220124/zTEx/61eeac9bf997dd6623379e6d/gulmohar_jaipur_teal_floral_print_flared_kurta_set.jpg",
      tag: "GULMOHAR JAIPUR",
      name: "Floral Printed Flared Kurta Set",
      price: "₹1,299",
      strikedoffprice: "₹2,499",
      discount : "(48% off)",
      
    },
    {id:5,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220127/RXhg/61f2daaef997dd66234079f3/gosriki_pink_geometric_print_straight_kurta_set.jpg",
      tag: "GOSRIKI",
      name: "Geometric Print Straight Kurta Set",
      price: "₹895",
      strikedoffprice: "₹3,196",
      discount : "(72% off)",
     
    },
    {id:6,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210627/gnhW/60d8e21cf997ddb312fc7007/amrutam_fab_multicolored_striped_saree_with_tassels.jpg",
      tag: "AMRUTAM FAB",
      name: "Striped Saree with Tassels",
      price: "₹1,305",
      strikedoffprice: "₹4,499",
      discount : "(71% off)",
      
    },
    {id:7,
      image_url: "https://assets.ajio.com/medias/sys_master/root/h65/h55/14513913724958/avaasa_mix_n%27_match_navy_blue_ankle-length_leggings_with_elasticated_waist.jpg",
      tag: "AVAASA MIX N'MATCH",
      name: "Ankle-Length Leggings with Elasticated Waist",
      price: "₹299",
      strikedoffprice: "₹399",
      discount : "(25% off)",
      
    },
    {id:8,
      image_url:"https://assets.ajio.com/medias/sys_master/root/hee/hbd/14644605124638/avaasa_mix_n%27_match_red_ankle-length_leggings_with_elasticated_waist.jpg"
      ,tag: "AVAASA MIX N'MATCH",
      name: "Ankle-Length Leggings with Elasticated Waist",
      price: "₹299",
      strikedoffprice: "₹399",
      discount : "(25% off)",
      
    },
    {id:9,
      image_url:"https://assets.ajio.com/medias/sys_master/root/20201027/CU0r/5f983e55f997dd8c837907c1/tommy_hilfiger_pink_th_2545_mirrored_cateye_sunglasses.jpg",
      tag: "TOMMY HILFIGER",
      name: "Th 2545 Mirrored Cateye Sunglasses",
      price: "₹3,178",
      strikedoffprice: "₹8,599",
      discount : "(63% off)",
      
    },
    {id:10,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211012/TyZm/6165b110f997dd3ed46ca2bd/ishin_blue_floral_embroidered_a-line_kurta_set.jpg",
      tag: "Ishin",
      name: "Floral Embroidered A-line Kurta Set",
      price: "₹1,292",
      strikedoffprice: "₹2,749",
      discount : "(69% off)",
     
    },
    {id:11,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220114/V63f/61e1703baeb2695cdd158d02/avaasa_mix_n%27_match_light_blue_straight_kurta_with_floral_embroidered_yoke.jpg",
      tag: "AVAASA MIX N'MATCH",
      name: "Straight Kurta with FLoral Embroidered Yoke",
      price: "₹424",
      strikedoffprice: "₹499",
      discount : "(15% off)",
      
    },
    
    {id:12,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20201012/AkfF/5f8481b0aeb269d563d7e436/candere_by_kalyan_jewellers_gold_1g_24_kt%28999%29_yellow_gold_coin.jpg",
      tag: "Candere By Kalyan Jewellers",
      name: "1G 24 KT(999) Yellow Gold Coin",
      price: "₹5,627",
      strikedoffprice: "₹6,394",
      discount : "(12% off)",
      
    },
    {id:13,
      image_url: "https://assets.ajio.com/medias/sys_master/root/hdd/h59/16494126202910/avaasa_mix_n%27_match_beige_ankle-length_leggings_with_elasticated_waist.jpg",
      tag: "AVAASA MIX N'MATCH",
      name: "Ankle-Length Leggings with Elasticated Waist",
      price: "₹299",
      strikedoffprice: "₹399",
      discount : "(25% off)",
      
    },
    {id:14,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20211221/Hj8M/61c0f503aeb269011014959a/anubhutee_burgundy_printed_kurta_set_with_dupatta_.jpg",
      tag: "ANUBHUTEE",
      name: "Printed Kurta Set With Dupatta",
      price: "₹1,480",
      strikedoffprice: "₹3,699",
      discount : "(60% off)",
     
    },
    {id:15,
      image_url: "https://assets.ajio.com/medias/sys_master/root/h23/h33/14150440419358/puma_black_bmw_motorsport_drift_cat_5_ultra_shoes.jpg",
      tag: "Puma",
      name: "BMW Motorsport Drift Cat 5 Ultra Shoes",
      price: "₹3,500",
      strikedoffprice: "₹6,999",
      discount : "(50% off)",
     
    },
    {id:16,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210706/nRHL/60e3672aaeb269a9e3381678/hushh_yellow_printed_pyjamas_with_insert_pockets.jpg",
      tag: "HUSHH",
      name: "Printed Pyjamas with Insert Pockets",
      price: "₹250",
      strikedoffprice: "₹499",
      discount : "(50% off)",
      
    },
    {id:17,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20201012/AkfF/5f8481b0aeb269d563d7e436/candere_by_kalyan_jewellers_gold_1g_24_kt%28999%29_yellow_gold_coin.jpg",
      tag: "Whp Jewellers",
      name: "24KT(999) 1gm Yellow Gold Coin",
      price: "₹5,616",
      strikedoffprice: "₹6,382",
      discount : "(12% off)",
      
    },
    {id:18,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220131/My2z/61f7fa4bf997dd66234e4e43/dnmx_grey_graphic_print_slim_fit_crew-neck_t-shirt.jpg",
      tag: "DNMX",
      name: "Graphic Print Slim Fit Crew-Neck T-shirt",
      price: "₹254",
      strikedoffprice: "₹299",
      discount : "(15% off)",
      
    },
    {id:19,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20220114/f4O2/61e08ec6f997dd662320ac04/fashor_magenta_indian_straight_kurta.jpg",
      tag: "Fashor",
      name: "Indian Straight Kurta",
      price: "₹1,049",
      strikedoffprice: "₹2,299",
      discount : "(54% off)",
      
    },
    {id:20,
      image_url: "https://assets.ajio.com/medias/sys_master/root/20210810/LZXe/611184fff997ddce8997fd5a/avaasa_mix_n%27_match_black_block_print_buton-down_straight_kurta.jpg",
      tag: "AVAASA MIX N'MATCH",
      name: "Block Print Button-Down Straight Kurta",
      price: "₹424",
      strikedoffprice: "₹499",
      discount : "(15% off)",
      
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
    img.addEventListener("click", function(){
      console.log(elem)
      addtocart(elem);
    });

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
  var cartdata=JSON.parse(localStorage.getItem("datacart")) || []
  function addtocart(elem){
   
    cartdata.push(elem)
    console.log(cartdata)
    localStorage.setItem("datacart",JSON.stringify(cartdata))
  }


  