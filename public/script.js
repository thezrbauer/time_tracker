const source = "../data.json"
 
async function getJSON() {
    const response = await fetch(source);
    const data = await response.json();

   document.getElementById("daily").addEventListener('click', () => {
      closeWeekly();
      closeMonthly();
      openDaily();
   });
   document.getElementById("weekly").addEventListener('click', () => {
      closeDaily();
      closeMonthly();
      openWeekly();
   });

   document.getElementById("monthly").addEventListener('click', () => {
      closeDaily();
      closeWeekly();
      openMonthly();
   });



function openDaily () {
   document.getElementById('workDaily').textContent = data[0].timeframes.daily.current + "hrs"
   document.getElementById('lastWorkDaily').textContent = "Yesterday - " + data[0].timeframes.daily.previous + "hrs"
   document.getElementById('playDaily').textContent = data[1].timeframes.daily.current + "hrs"
   document.getElementById('lastPlayDaily').textContent = "Yesterday - " + data[1].timeframes.daily.previous + "hrs"
   document.getElementById('studyDaily').textContent = data[2].timeframes.daily.current + "hrs"
   document.getElementById('lastStudyDaily').textContent = "Yesterday - " + data[2].timeframes.daily.previous + "hrs"
   document.getElementById('exerciseDaily').textContent = data[3].timeframes.daily.current + "hrs"
   document.getElementById('lastExDaily').textContent = "Yesterday - " + data[3].timeframes.daily.previous + "hrs"
   document.getElementById('socialDaily').textContent = data[4].timeframes.daily.current + "hrs"
   document.getElementById('lastSocDaily').textContent = "Yesterday - " + data[4].timeframes.daily.previous + "hrs"
   document.getElementById('selfDaily').textContent = data[5].timeframes.daily.current + "hrs"
   document.getElementById('lastSelfDaily').textContent = "Yesterday - " + data[5].timeframes.daily.previous + "hrs"
};

function closeDaily () {
   document.getElementById('workDaily').textContent = null;
   document.getElementById('lastWorkDaily').textContent = null;
   document.getElementById('playDaily').textContent = null;
   document.getElementById('lastPlayDaily').textContent = null;
   document.getElementById('studyDaily').textContent = null;
   document.getElementById('lastStudyDaily').textContent = null;
   document.getElementById('exerciseDaily').textContent = null;
   document.getElementById('lastExDaily').textContent = null;
   document.getElementById('socialDaily').textContent = null;
   document.getElementById('lastSocDaily').textContent = null;
   document.getElementById('selfDaily').textContent = null;
   document.getElementById('lastSelfDaily').textContent = null;
};


function openWeekly () { 
    document.getElementById('workWeekly').textContent = data[0].timeframes.weekly.current + "hrs"
    document.getElementById('lastWorkWeekly').textContent = "Yesterday - " + data[0].timeframes.weekly.previous + "hrs"
    document.getElementById('playWeekly').textContent = data[1].timeframes.weekly.current + "hrs"
    document.getElementById('lastPlayWeekly').textContent = "Yesterday - " + data[1].timeframes.weekly.previous + "hrs"
    document.getElementById('studyWeekly').textContent = data[2].timeframes.weekly.current + "hrs"
    document.getElementById('lastStudyWeekly').textContent = "Yesterday - " + data[2].timeframes.weekly.previous + "hrs"
    document.getElementById('exerciseWeekly').textContent = data[3].timeframes.weekly.current + "hrs"
    document.getElementById('lastExWeekly').textContent = "Yesterday - " + data[3].timeframes.weekly.previous + "hrs"
    document.getElementById('socialWeekly').textContent = data[4].timeframes.weekly.current + "hrs"
    document.getElementById('lastSocWeekly').textContent = "Yesterday - " + data[4].timeframes.weekly.previous + "hrs"
    document.getElementById('selfWeekly').textContent = data[5].timeframes.weekly.current + "hrs"
    document.getElementById('lastSelfWeekly').textContent = "Yesterday - " + data[5].timeframes.weekly.previous + "hrs"
  
 };

 function closeWeekly () {
   document.getElementById('workWeekly').textContent = null;
   document.getElementById('lastWorkWeekly').textContent = null;
   document.getElementById('playWeekly').textContent = null;
   document.getElementById('lastPlayWeekly').textContent = null;
   document.getElementById('studyWeekly').textContent = null;
   document.getElementById('lastStudyWeekly').textContent = null;
   document.getElementById('exerciseWeekly').textContent =null;
   document.getElementById('lastExWeekly').textContent = null;
   document.getElementById('socialWeekly').textContent = null;
   document.getElementById('lastSocWeekly').textContent = null;
   document.getElementById('selfWeekly').textContent = null;
   document.getElementById('lastSelfWeekly').textContent = null;
 };

 function openMonthly () { 
    document.getElementById('workMonthly').textContent = data[0].timeframes.monthly.current + "hrs"
    document.getElementById('lastWorkMonthly').textContent = "Yesterday - " + data[0].timeframes.monthly.previous + "hrs"
    document.getElementById('playMonthly').textContent = data[1].timeframes.monthly.current + "hrs"
    document.getElementById('lastPlayMonthly').textContent = "Yesterday - " + data[1].timeframes.monthly.previous + "hrs"
    document.getElementById('studyMonthly').textContent = data[2].timeframes.monthly.current + "hrs"
    document.getElementById('lastStudyMonthly').textContent = "Yesterday - " + data[2].timeframes.monthly.previous + "hrs"
    document.getElementById('exerciseMonthly').textContent = data[3].timeframes.monthly.current + "hrs"
    document.getElementById('lastExMonthly').textContent = "Yesterday - " + data[3].timeframes.monthly.previous + "hrs"
    document.getElementById('socialMonthly').textContent = data[4].timeframes.monthly.current + "hrs"
    document.getElementById('lastSocMonthly').textContent = "Yesterday - " + data[4].timeframes.monthly.previous + "hrs"
    document.getElementById('selfMonthly').textContent = data[5].timeframes.monthly.current + "hrs"
    document.getElementById('lastSelfMonthly').textContent = "Yesterday - " + data[5].timeframes.monthly.previous + "hrs"
   
 };

 function closeMonthly () { 
   document.getElementById('workMonthly').textContent = null;
   document.getElementById('lastWorkMonthly').textContent = null;
   document.getElementById('playMonthly').textContent = null;
   document.getElementById('lastPlayMonthly').textContent = null;
   document.getElementById('studyMonthly').textContent = null;
   document.getElementById('lastStudyMonthly').textContent = null;
   document.getElementById('exerciseMonthly').textContent = null;
   document.getElementById('lastExMonthly').textContent = null;
   document.getElementById('socialMonthly').textContent = null;
   document.getElementById('lastSocMonthly').textContent = null;
   document.getElementById('selfMonthly').textContent = null;
   document.getElementById('lastSelfMonthly').textContent = null;
  
};
openDaily();

};

getJSON();
