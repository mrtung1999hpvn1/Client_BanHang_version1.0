import React from 'react'
import $ from 'jquery'

function DSTaiKhoan() {
    // const [load,setLoad] = React.useState('')
    // <img id="someImage" />
    function showGetResult(name , idElelemnt){
        var result = null;
        var URL = name;
        $.ajax({
            type: "GET",
            url: URL,
            beforeSend: function (xhr) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            },
            cache:false,
            async:true,
            crossDomain:true,
            // dataType:'image/png',
            headers: {'Referer': "https://www.orange-book.com/",
            "accept": "application/json",
            "Access-Control-Allow-Origin":"*"
                },
            success: function (result, textStatus, jqXHR) {       
              if(result.length < 1){
                  alert("The thumbnail doesn't exist");
                  $(`#${idElelemnt}`).attr("src", "data:image/png;base64,");
                  console.log(result)
                  return
              }
          
              var binary = "";
              var responseText = jqXHR.responseText;
              var responseTextLen = responseText.length;
          
              for (let  i = 0; i < responseTextLen; i++ ) {
                  binary += String.fromCharCode(responseText.charCodeAt(i) & 255)
              }
              $(`#${idElelemnt}`).attr("src", "data:image/png;base64,"+btoa(binary));
            },
            error: function(xhr, textStatus, errorThrown){
              alert("Error in getting document "+textStatus);
            } 
          });
   };



    React.useEffect(()=>{
        try {
            console.log('test')
            // showGetResult("https://image.trusco-sterra.com/img/daihyou_small/WO81PCT70DMV_7255__DAS.jpg","someImage")
            showGetResult("https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80","someImage")
        } catch (error) {
            
        }
    },[])
    return (
        <div>
            a
            <img id="someImage" style={{width:'200px',height:'200px'}}/>       </div>
    )
}

export default DSTaiKhoan
