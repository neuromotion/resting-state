(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"a",function(){return d});var r=n(4),o=n(19),a=n(22),c=n.n(a),i=!1;if(r.b.USE_ELECTRON){var s=window.require("electron");i=s.ipcRenderer}var u=function(){var e=r.b.USE_PHOTODIODE?"visible":"invisible";return'<div class="photodiode-box '.concat(e,'" id="photodiode-box">\n\t\t\t\t\t\t\t\t\t<span id="photodiode-spot" class="photodiode-spot"></span>\n  \t\t\t\t\t\t\t\t</div>')},d=function(e){if(r.b.USE_PHOTODIODE){var t=e;e<o.eventCodes.open_task&&(t=1),function e(t,n){n>0&&function(e,t){c()(".photodiode-spot").css({"background-color":"white"}),setTimeout(function(){c()(".photodiode-spot").css({"background-color":"black"}),t()},e)}(t,function(){setTimeout(function(){e(t,n-1)},t)})}(40,t),i&&i.send("trigger",e)}}},19:function(e,t){e.exports={eventCodes:{test_connect:32,open_task:12,left:1,right:2,up:3,down:4,center:5,blink:{start:6,stop:7},close:{start:8,stop:9},rest:{start:10,stop:11}}}},20:function(e,t,n){"use strict";n.d(t,"e",function(){return c}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return u}),n.d(t,"d",function(){return a});var r,o=n(15),a=function(e){document.getElementById(e).classList.add("nocursor")},c=function(e){return new Promise(function(t){return setTimeout(t,e)})},i=((r=n(70)).keys().map(r),function(){var e=o.jsPsych.turk.turkInfo();return"".concat(e.workerId,":").concat(e.assignmentId)}),s=function(){return function(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var r=t[n].split("=");if(decodeURIComponent(r[0])===e)return decodeURIComponent(r[1])}}("PROLIFIC_PID")},u=function(e){var t=new AudioContext,n=t.createOscillator(),r=t.createGain();n.type=e.type,n.connect(r),n.frequency.setValueAtTime(e.frequency,0),console.log(t.currentTime),r.connect(t.destination),n.start(),n.stop(t.currentTime+.4)}},21:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return"<div class=".concat(n?"center_container":t?"main-prompt":"main",">").concat(e,"</div>")}},36:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return f}),n.d(t,"a",function(){return b});var r=n(13),o=n.n(r),a=n(42),c=n(17),i=n(4),s=n(14),u=n(21),d=n(15),l=!1;if(i.b.USE_ELECTRON){var p=window.require("electron");l=p.ipcRenderer}var f=function(){document.title=i.e;var t='\n  <div class="d-flex flex-column align-items-center">\n  <p>'.concat(i.d.instructions.camera,'</p>\n  <video id="camera" width="640" height="480" autoplay></video>\n  </div>\n  ');return{type:"html_button_response",stimulus:Object(u.a)(t,!0)+Object(s.b)(),choices:[i.d.prompt.continue.button],response_ends_trial:!0,on_load:function(){var t=d.jsPsych.data.get().values()[0].participant_id,n=document.getElementById("camera"),r=function(r,o){console.log(r),"cameraCapture"===o&&(n.srcObject=r);var a=[];window[o]=new MediaRecorder(r,{mimeType:"video/webm"}),window[o].addEventListener("dataavailable",function(e){e.data.size>0&&a.push(e.data)}),window[o].addEventListener("stop",function(){!function(t,n,r){var o=new FileReader,a="pid_".concat(r,"_").concat(n,"_").concat(Date.now(),".webm");o.onload=function(){if(2===o.readyState){var n=new e(o.result);l.send("save_video",a,n),console.log("Saving ".concat(JSON.stringify({fileName:a,size:t.size})))}},o.readAsArrayBuffer(t)}(new Blob(a),o,t)})};navigator.mediaDevices.getUserMedia({video:!0}).then(function(e){return r(e,"cameraCapture")}),window.require("electron").desktopCapturer.getSources({types:["window"]}).then(function(){var e=Object(c.a)(o.a.mark(function e(t){var n,c,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(a.a)(t);try{for(n.s();!(c=n.n()).done;)(s=c.value).name===i.e&&navigator.mediaDevices.getUserMedia({video:{mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:s.id}}}).then(function(e){r(e,"screenCapture")}).catch(function(e){return console.log(e)})}catch(o){n.e(o)}finally{n.f()}case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},on_finish:function(){if(i.b.USE_CAMERA)try{window.cameraCapture.start(),window.screenCapture.start()}catch(e){window.alert("Camera permissions were not given, if you choose to proceed, your recording will not be saved. Please restart the experiment after you have given permission.")}}}},b=function(e){return{type:"html_keyboard_response",stimulus:Object(u.a)("<h1>".concat(i.d.task.recording_end,"</h1>"),!0)+Object(s.b)(),trial_duration:e,on_load:function(){if(i.b.USE_CAMERA){console.log("finished");try{window.cameraCapture.stop(),window.screenCapture.stop()}catch(e){window.alert("Your video recording was not saved")}}}}}}).call(this,n(75).Buffer)},4:function(e,t,n){"use strict";n.d(t,"e",function(){return d}),n.d(t,"d",function(){return E}),n.d(t,"b",function(){return w}),n.d(t,"a",function(){return u});var r=n(15),o=n(29),a=n.n(o),c=n(19);n.d(t,"c",function(){return c.eventCodes});var i=n(26),s=n(20),u={frequency:100*(c.eventCodes.open_task-9),type:"sine"},d="honeycomb template",l=!r.jsPsych.turk.turkInfo().outsideTurk,p=Object(s.b)()&&!l,f=!0,b="true"===Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_FIREBASE;try{window.require("electron")}catch(y){f=!1}var m="true"===Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_VOLUME,h="true"===Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_VIDEO&&f,_="true"===Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_USE_EEG&&f,v="true"===Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_USE_PHOTODIODE&&f,E=n(73);if(!f){var O=n(74);a.a.merge(E,O)}var w=Object(i.init)({USE_PHOTODIODE:v,USE_EEG:_,USE_ELECTRON:f,USE_MTURK:l,USE_VOLUME:m,USE_CAMERA:h,USE_PROLIFIC:p,USE_FIREBASE:b})},43:function(e){e.exports={a:"2.3.0"}},45:function(e,t,n){e.exports=n(88)},52:function(e,t,n){},54:function(e,t,n){},70:function(e,t,n){var r={"./blue_payout_correct_10.png":71,"./blue_payout_correct_100.png":72};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=70},71:function(e,t,n){e.exports=n.p+"static/media/blue_payout_correct_10.f515a81e.png"},72:function(e,t,n){e.exports=n.p+"static/media/blue_payout_correct_100.ae2416c7.png"},73:function(e){e.exports={task:{name:"Resting State",end:"This experiment has ended.",recording_end:"Your recording has ended."},prompt:{continue:{press:"Press any key to continue.",button:"Continue"},focus:"Make sure the photodiode is covering the spot and any external recordings have begun before continuing.",fullscreen:"Press 'cmd + ctrl + F' to toggle Fullscreen.",zoom:"Zoom in to enlarge the screen.",setting_up:"Setting up task..."},welcome:{large_window:"Please make this window as large as possible.",message:"Instructions"},userid:{set:"Please enter participant ID."},eventMarker:{found:"Note: event marker found.",not_found:"Note: no event marker found."},instructions:{moving_dot:"Try to relax and follow the dot on the screen as it moves. Try to relax your shoulders, don't clench your jaw, and try not to move. Movements affect the quality of the recordings.",blink:'For this next section, start blinking when you hear a "beep", and stop when you hear another "beep".',close_eyes:'For this next section, close your eyes when you hear a "beep", and open when you hear another "beep". ',fixate:"For the remaining minute and a half, fixate on the dot in the middle of the screen and try to relax.",align_photodiode:"Make sure the photodiode is aligned and the EEG recording has begun before continuing.",adjust_volume:"Set tablet volume to 50/100.",camera:"Make sure the camera is pointing to you and your face is within the camera area."},blink:"Blink.",close:"Close your eyes."}},74:function(e){e.exports={welcome:{message:"Welcome to the NEURO experiment."},userid:{set:"Setting up user ID."}}},88:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(41),c=n.n(a),i=(n(52),n(13)),s=n.n(i),u=n(17),d=n(18),l=(n(54),n(55),n(56),n(24)),p=n(44);var f=function(e){var t=e.onLogin,n=e.envParticipantId,a=e.envStudyId,c=e.validationFunction,i=Object(r.useState)(""),s=Object(d.a)(i,2),u=s[0],f=s[1],b=Object(r.useState)(""),m=Object(d.a)(b,2),h=m[0],_=m[1],v=Object(r.useState)(!1),E=Object(d.a)(v,2),O=E[0],w=E[1];return Object(r.useEffect)(function(){f(n),_(a)},[n,a]),o.a.createElement("div",{className:"centered-h-v"},o.a.createElement("div",{className:"width-50"},O?o.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The participant ID and study ID do not match"):null,o.a.createElement(l.a,{className:"centered-h-v",onSubmit:function(e){e.preventDefault(),c(u,h).then(function(e){e?t(e,h,u):w(!0)})}},o.a.createElement(l.a.Group,{className:"width-100",size:"lg",controlId:"participantId"},o.a.createElement(l.a.Label,null,"Participant ID"),o.a.createElement(l.a.Control,{autoFocus:!0,type:"participantId",value:u,onChange:function(e){return f(e.target.value)}})),o.a.createElement(l.a.Group,{className:"width-100",size:"lg",controlId:"studyId"},o.a.createElement(l.a.Label,null,"Study ID"),o.a.createElement(l.a.Control,{type:"studyId",value:h,onChange:function(e){return _(e.target.value)}})),o.a.createElement(p.a,{style:{width:"100%"},block:!0,size:"lg",type:"submit",disabled:!(u.length>0&&h.length>0)},"Log In"))))},b=n(15),m=n(4),h=n(14),v=n(21),E=function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'<span style="color: green;">'.concat(m.d.eventMarker.found,"</span>"));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),O=function(){return{type:"html_button_response",stimulus:Object(v.a)("<div><h2 id='usb-alert'></h2></div>",!0)+Object(h.b)(),prompt:["<br><h3>".concat(m.d.prompt.focus,"</h3>")],choices:[m.d.prompt.continue.button],on_load:function(){return E().then(function(e){return document.getElementById("usb-alert").innerHTML=e})}}},w=n(20),y=function(){return{type:"html_keyboard_response",stimulus:Object(v.a)("<h1>".concat(m.d.prompt.setting_up,"</h1>"),!0)+Object(h.b)(),trial_duration:2e3,on_load:function(){Object(h.a)(m.c.open_task),Object(w.a)(m.a)}}},g=n(26),j=function(e){return{type:"html_keyboard_response",stimulus:Object(v.a)("\n    <div class='instructions'>\n    <h1>".concat(e,"</h1>\n    </div>\n    "),!0),prompt:m.d.prompt.continue.press,response_ends_trial:!0}},I=[Object(g.showMessage)(m.b,{responseType:"html_button_response",message:m.d.task.name,responseEndsTrial:!0,buttons:[m.d.prompt.continue.button]})];m.b.USE_PHOTODIODE&&(I.push(O()),I.push(y())),I.push({type:"html_keyboard_response",stimulus:Object(v.a)("\n  <div class='instructions'>\n  <h1>".concat(m.d.instructions.moving_dot,"</h1>\n  </div>\n  "),!0),prompt:m.d.prompt.continue.press,response_ends_trial:!0});var k={type:"html_keyboard_response",stimulus:"",timeline:I},U=n(36),P='<div id="fixation-container"><div id="fixation-dot"> </div></div>',S=n(22),C=n.n(S),R=function(e){C()("#fixation-container").attr("class","move-".concat(e))},D=function(){var e=new AudioContext,t=e.createOscillator(),n=e.createGain();t.type="sine",t.connect(n),n.connect(e.destination),t.start(),n.gain.exponentialRampToValueAtTime(1e-7,e.currentTime+1)},T=function(e){return new Promise(function(t){return setTimeout(t,e)})},x=n(19),L=function(){var e=Object(u.a)(s.a.mark(function e(t,n,r,o,a){var c,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){return Date.now()-r},i=o[n],e.next=4,T(t);case 4:R(n),Object(h.a)(i),a.push({code:i,rt:c(),timestamp:Date.now()});case 7:case"end":return e.stop()}},e)}));return function(t,n,r,o,a){return e.apply(this,arguments)}}(),A=function(e){var t=P+Object(h.b)(),n=function(){var e=Object(u.a)(s.a.mark(function e(t,n,r,o){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"left"===t&&(n.push({code:o.center,rt:0,timestamp:Date.now()}),Object(h.a)(o.center)),e.next=3,L(5e3,t,r,o,n);case 3:return e.next=5,L(2e3,"center",r,o,n);case 5:return e.next=7,L(2e3,t,r,o,n);case 7:return e.next=9,L(2e3,"center",r,o,n);case 9:return e.next=11,L(2e3,t,r,o,n);case 11:return e.next=13,L(2e3,"center",r,o,n);case 13:console.log(n);case 14:case"end":return e.stop()}},e)}));return function(t,n,r,o){return e.apply(this,arguments)}}();return{type:"call_function",async:!0,func:function(r){Object(w.d)("experiment");var o=Date.now(),a=[];document.getElementById("jspsych-content").innerHTML=t;var c=C()(".jspsych-content-wrapper");c.attr("class","fixation-container"),n(e,a,o,x.eventCodes),setTimeout(function(){return r({direction:e,code:x.eventCodes[e],start:o,data:a})},"down"===e?17e3:15100),c.attr("class","jspsych-content-wrapper")}}},N=function(e){var t='<div id="dot-container"><h3>'.concat(m.d[e],"</h3></div>")+Object(h.b)();return{type:"html_keyboard_response",choices:b.jsPsych.NO_KEYS,stimulus:t,trial_duration:11e3,on_load:function(){var t=Object(u.a)(s.a.mark(function t(){var n,r,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Date.now(),r=x.eventCodes[e],o=[],Object(h.a)(r.start),D(),o.push({trial:e,code:r.start,rt:Date.now()-n}),t.next=8,T(1e4);case 8:Object(h.a)(r.stop),D(),o.push({trial:e,code:r.stop,rt:Date.now()-n}),b.jsPsych.data.write(o);case 12:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()}},B=function(e){var t=P+Object(h.b)(),n=m.c.rest.start,r=m.c.rest.stop;return{type:"html_keyboard_response",choices:b.jsPsych.NO_KEYS,stimulus:t,response_ends_trial:!1,trial_duration:e,on_load:function(){var e=Object(u.a)(s.a.mark(function e(){var t,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Date.now(),o=[],Object(h.a)(n),o.push({code:n,rt:Date.now()-t}),e.next=6,T(9e4);case 6:Object(h.a)(r),o.push({code:r,rt:Date.now()-n}),b.jsPsych.data.write(o);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}},F=[k,A("left"),A("right"),A("up"),A("down"),j(m.d.instructions.blink),N("blink"),j(m.d.instructions.close_eyes),N("close"),j(m.d.instructions.fixate),B(91e3)];m.b.USE_CAMERA&&(F.splice(1,0,Object(U.b)()),F.push(Object(U.a)(5e3))),F.push(Object(g.showMessage)(m.b,{duration:5e3,message:m.d.task.end}));var M=F;var V=function(e){var t=e.dataUpdateFunction,n=e.dataFinishFunction;return o.a.createElement("div",{className:"App"},o.a.createElement(b.Experiment,{settings:{timeline:M,on_data_update:function(e){return t(e)},on_finish:function(e){return n(e)}}}))},q=n(32);n(84);n(85).config();var H={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_apiKey,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_authDomain,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_databaseURL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_projectId||"no-firebase",storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_storageBucket,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_messagingSenderId,appId:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_appId},z=q.a.initializeApp(H).firestore();"localhost"===window.location.hostname&&z.useEmulator("localhost",8080);var G=function(e,t,n){return z.collection("participant_responses").doc(t).collection("participants").doc(e).collection("data").doc(n).set({start_time:n,app_version:window.navigator.appVersion,app_platform:window.navigator.platform,results:[]}).then(function(){return!0}).catch(function(e){return!1})},K=function(e){console.log(e);var t=e.participant_id,n=e.study_id,r=e.start_date;z.collection("participant_responses").doc(n).collection("participants").doc(t).collection("data").doc(r).update("results",q.a.firestore.FieldValue.arrayUnion(e))},Y=(q.a,n(43));var J=function(){var e=(new Date).toISOString(),t=Object(r.useState)(!1),n=Object(d.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(!1),l=Object(d.a)(i,2),p=l[0],h=l[1],v=Object(r.useState)(!1),E=Object(d.a)(v,2),O=E[0],y=E[1],g=Object(r.useState)(""),j=Object(d.a)(g,2),I=j[0],k=j[1],U=Object(r.useState)(""),P=Object(d.a)(U,2),S=P[0],C=P[1],R=Object(r.useState)("default"),D=Object(d.a)(R,2),T=D[0],x=D[1],L=Object(r.useState)(!1),A=Object(d.a)(L,2),N=A[0],B=A[1],F=new URLSearchParams(window.location.search),M=function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),q=function(e){},H=Object(r.useCallback)(function(t,n,r){t&&b.jsPsych.data.addProperties({participant_id:r,study_id:n,start_date:e,task_version:Y.a}),c(t)},[e]);return Object(r.useEffect)(function(){if(console.log("Turk:",m.b.USE_MTURK),console.log("Firebase:",m.b.USE_FIREBASE),console.log("Prolific:",m.b.USE_PROLIFIC),console.log("Electron:",m.b.USE_ELECTRON),console.log("Video:",m.b.USE_CAMERA),console.log("Volume:",m.b.USE_VOLUME),console.log("Event Marker:",m.b.USE_EEG),console.log("Photodiode:",m.b.USE_PHOTODIODE),m.b.USE_ELECTRON){var e=window.require("electron").ipcRenderer;h(e),e.send("updateEnvironmentVariables",m.b);var t=e.sendSync("syncCredentials");t.envParticipantId&&k(t.envParticipantId),t.envStudyId&&C(t.envStudyId),x("desktop")}else if(m.b.USE_MTURK){window.lodash=_.noConflict();var n=Object(w.c)();y(new PsiTurk(n,"/complete")),x("mturk"),H(!0,"mturk",n)}else if(m.b.USE_PROLIFIC){var r=Object(w.b)();m.b.USE_FIREBASE&&r?(x("firebase"),H(!0,"prolific",r)):B(!0)}else if(m.b.USE_FIREBASE){x("firebase");var o=F.get("participantID"),a=F.get("studyID");o&&k(o),a&&C(a)}else B(!0)},[]),N?o.a.createElement("div",{className:"centered-h-v"},o.a.createElement("div",{className:"width-50 alert alert-danger"},"Please ask your task provider to enable firebase.")):o.a.createElement(o.a.Fragment,null,a?o.a.createElement(V,{dataUpdateFunction:{desktop:function(e){p.send("data",e)},firebase:function(e){K(e)},mturk:function(e){O.recordTrialData(e)},default:q}[T],dataFinishFunction:{desktop:function(){p.send("end","true")},mturk:function(){!function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O.saveData(),e.next=3,Object(w.e)(5e3);case 3:O.completeHIT();case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},firebase:q,default:q}[T]}):o.a.createElement(f,{validationFunction:{desktop:M,default:M,firebase:function(t,n){return G(t,n,e)}}[T],envParticipantId:I,envStudyId:S,onLogin:H}))};c.a.render(o.a.createElement(J,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.2b17ad9f.chunk.js.map