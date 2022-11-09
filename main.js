var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult=function (event){
    console.log(event);
    content=event.results[0][0].transcript.toLowerCase();
    console.log(content);
    if(content=="selfie"){
        speak();

    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout (function(){
        imge_id="SELFIE1";
        take_snapshot()
        speak_data="Your selfie will be taken in 5 seconds";
        utterThis.SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);}, 5000);

        setTimeout (function(){
            imge_id="SELFIE2";
            take_snapshot()
            speak_data="Your selfie will be taken in 10 seconds";
            utterThis.SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);}, 10000);

            setTimeout (function(){
                imge_id="SELFIE3";
                take_snapshot()
                synth.speak(utterThis);}, 15000);

                
}

function take_snapshot(){
    console.log(imge_id);

    Webcam.snap(function(data_uri){
        
        if(imge_id=="SELFIE1"){
            document.getElementById("result1").innerHTML='<img id="SELFIE1" src="'+data_uri+'"/>'
        }

        if(imge_id=="SELFIE2"){
            document.getElementById("result2").innerHTML='<img id="SELFIE2" src="'+data_uri+'"/>'
        }

        if(imge_id=="SELFIE3"){
            document.getElementById("result3").innerHTML='<img id="SELFIE3" src="'+data_uri+'"/>'
        }
    })
}