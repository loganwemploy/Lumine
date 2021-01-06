import React from 'react'

const SideMenu = () => {
    return (
        <>
            <div className="app-container">
 
 <div className="app-right">
  
   <div className="app-activity-box">
     <div className="activity-info-boxes">
       <div className="activity-info-box time">
         <div className="info-icon-wrapper">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-clock" viewBox="0 0 24 24">
             <defs/>
             <circle cx="12" cy="12" r="10"/>
             <path d="M12 6v6l4 2"/>
           </svg>
         </div>
         <div className="info-text-wrapper">
           <span className="info-text-upper">13h</span>
           <span className="info-text-bottom">Time</span>
         </div>
       </div>
       <div className="activity-info-box atendee">
         <div className="info-icon-wrapper">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-users" viewBox="0 0 24 24">
             <defs/>
             <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
             <circle cx="9" cy="7" r="4"/>
             <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
           </svg>
         </div>
         <div className="info-text-wrapper">
           <span className="info-text-upper">32</span>
           <span className="info-text-bottom">Atendeed</span>
         </div>
       </div>
       <div className="activity-info-box meeting">
         <div className="info-icon-wrapper">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-calendar" viewBox="0 0 24 24">
             <defs/>
             <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
             <path d="M16 2v4M8 2v4M3 10h18"/>
           </svg>
         </div>
         <div className="info-text-wrapper">
           <span className="info-text-upper">122</span>
           <span className="info-text-bottom">Meetings</span>
         </div>
       </div>
       <div className="activity-info-box reject">
         <div className="info-icon-wrapper">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-x-square" viewBox="0 0 24 24">
             <defs/>
             <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
             <path d="M9 9l6 6M15 9l-6 6"/>
           </svg>
         </div>
         <div className="info-text-wrapper">
           <span className="info-text-upper">12</span>
           <span className="info-text-bottom">Rejected</span>
         </div>
       </div>
     </div>
     <div className="activity-info-header">
       <span className=
"info-header-bold">Current Week</span>
        <span className=
"info-header-light">Activity</span>
     </div>
     <div className="activity-days-wrapper">
       <div className="day">
         <div className="chart"></div>
         <span>MON</span>
       </div>
       <div className="day">
         <div className="chart"></div>
         <span>TUE</span>
       </div>
       <div className="day current">
         <div className="chart"></div>
         <span>WED</span>
       </div>
       <div className="day">
         <div className="chart"></div>
         <span>THU</span>
       </div>
       <div className="day">
         <div className="chart"></div>
         <span>FRI</span>
       </div>
       <div className="day">
         <div className="chart"></div>
         <span>SAT</span>
       </div>
       <div className="day">
         <div className="chart"></div>
         <span>SUN</span>
       </div>
     </div>
   </div>
   <div className="app-right-bottom">
     <div className="app-theme-selector">
     <button className="theme-color indigo" data-color="indigo">
       <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" title="Indigo">
         <defs/>
         <path fill="#fff" d="M451.648.356c-25.777 2.712-56.79 19.872-94.811 52.46-68.786 58.958-149.927 160.756-202.185 234-38.158-5.951-78.375 10.368-102.187 40.133C8.758 381.584 45.347 430.34 4.12 473.811c-7.179 7.569-4.618 20.005 4.98 24.114 67.447 28.876 153.664 10.879 194.109-31.768 24.718-26.063 38.167-64.54 31.411-100.762 72.281-55.462 172.147-140.956 228.7-211.885 31.316-39.277 47.208-70.872 48.584-96.59C513.759 22.273 486.87-3.346 451.648.356zM181.443 445.511c-27.362 28.85-87.899 45.654-141.767 31.287 30.12-48.043 4.229-91.124 36.214-131.106 26.246-32.808 79.034-41.993 109.709-11.317 35.839 35.843 19.145 86.566-4.156 111.136zm3.07-148.841c7.354-10.167 18.887-25.865 33.29-44.659l49.22 49.224c-18.125 14.906-33.263 26.86-43.077 34.494-8.842-15.879-22.526-30.108-39.433-39.059zM481.948 55.316c-3.368 63.004-143.842 186.021-191.797 226.621l-53.785-53.79c39.458-49.96 155.261-191.312 218.422-197.954 16.851-1.775 28.03 8.858 27.16 25.123z"/>
       </svg>
     </button>
     <button className="theme-color pink" data-color="pink" title="Pink">
       <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" >
         <defs/>
         <path fill="#fff" d="M451.648.356c-25.777 2.712-56.79 19.872-94.811 52.46-68.786 58.958-149.927 160.756-202.185 234-38.158-5.951-78.375 10.368-102.187 40.133C8.758 381.584 45.347 430.34 4.12 473.811c-7.179 7.569-4.618 20.005 4.98 24.114 67.447 28.876 153.664 10.879 194.109-31.768 24.718-26.063 38.167-64.54 31.411-100.762 72.281-55.462 172.147-140.956 228.7-211.885 31.316-39.277 47.208-70.872 48.584-96.59C513.759 22.273 486.87-3.346 451.648.356zM181.443 445.511c-27.362 28.85-87.899 45.654-141.767 31.287 30.12-48.043 4.229-91.124 36.214-131.106 26.246-32.808 79.034-41.993 109.709-11.317 35.839 35.843 19.145 86.566-4.156 111.136zm3.07-148.841c7.354-10.167 18.887-25.865 33.29-44.659l49.22 49.224c-18.125 14.906-33.263 26.86-43.077 34.494-8.842-15.879-22.526-30.108-39.433-39.059zM481.948 55.316c-3.368 63.004-143.842 186.021-191.797 226.621l-53.785-53.79c39.458-49.96 155.261-191.312 218.422-197.954 16.851-1.775 28.03 8.858 27.16 25.123z"/>
       </svg>
     </button>
     <button className="theme-color navy-dark active" data-color="navy-dark" title="Navy Dark">
       <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
         <defs/>
         <path fill="#fff" d="M451.648.356c-25.777 2.712-56.79 19.872-94.811 52.46-68.786 58.958-149.927 160.756-202.185 234-38.158-5.951-78.375 10.368-102.187 40.133C8.758 381.584 45.347 430.34 4.12 473.811c-7.179 7.569-4.618 20.005 4.98 24.114 67.447 28.876 153.664 10.879 194.109-31.768 24.718-26.063 38.167-64.54 31.411-100.762 72.281-55.462 172.147-140.956 228.7-211.885 31.316-39.277 47.208-70.872 48.584-96.59C513.759 22.273 486.87-3.346 451.648.356zM181.443 445.511c-27.362 28.85-87.899 45.654-141.767 31.287 30.12-48.043 4.229-91.124 36.214-131.106 26.246-32.808 79.034-41.993 109.709-11.317 35.839 35.843 19.145 86.566-4.156 111.136zm3.07-148.841c7.354-10.167 18.887-25.865 33.29-44.659l49.22 49.224c-18.125 14.906-33.263 26.86-43.077 34.494-8.842-15.879-22.526-30.108-39.433-39.059zM481.948 55.316c-3.368 63.004-143.842 186.021-191.797 226.621l-53.785-53.79c39.458-49.96 155.261-191.312 218.422-197.954 16.851-1.775 28.03 8.858 27.16 25.123z"/>
       </svg>
     </button>
     <button className="theme-color dark" data-color="dark" title="Dark">
       <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
         <defs/>
         <path fill="currentColor" d="M451.648.356c-25.777 2.712-56.79 19.872-94.811 52.46-68.786 58.958-149.927 160.756-202.185 234-38.158-5.951-78.375 10.368-102.187 40.133C8.758 381.584 45.347 430.34 4.12 473.811c-7.179 7.569-4.618 20.005 4.98 24.114 67.447 28.876 153.664 10.879 194.109-31.768 24.718-26.063 38.167-64.54 31.411-100.762 72.281-55.462 172.147-140.956 228.7-211.885 31.316-39.277 47.208-70.872 48.584-96.59C513.759 22.273 486.87-3.346 451.648.356zM181.443 445.511c-27.362 28.85-87.899 45.654-141.767 31.287 30.12-48.043 4.229-91.124 36.214-131.106 26.246-32.808 79.034-41.993 109.709-11.317 35.839 35.843 19.145 86.566-4.156 111.136zm3.07-148.841c7.354-10.167 18.887-25.865 33.29-44.659l49.22 49.224c-18.125 14.906-33.263 26.86-43.077 34.494-8.842-15.879-22.526-30.108-39.433-39.059zM481.948 55.316c-3.368 63.004-143.842 186.021-191.797 226.621l-53.785-53.79c39.458-49.96 155.261-191.312 218.422-197.954 16.851-1.775 28.03 8.858 27.16 25.123z"/>
       </svg>
     </button>
   </div>
   </div>
 </div>
 <div className="app-right-bottom">
     <div className="app-theme-selector">
     <button className="theme-color indigo" data-color="indigo">
       <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" title="Indigo">
         <defs/>
         <path fill="#fff" d="M451.648.356c-25.777 2.712-56.79 19.872-94.811 52.46-68.786 58.958-149.927 160.756-202.185 234-38.158-5.951-78.375 10.368-102.187 40.133C8.758 381.584 45.347 430.34 4.12 473.811c-7.179 7.569-4.618 20.005 4.98 24.114 67.447 28.876 153.664 10.879 194.109-31.768 24.718-26.063 38.167-64.54 31.411-100.762 72.281-55.462 172.147-140.956 228.7-211.885 31.316-39.277 47.208-70.872 48.584-96.59C513.759 22.273 486.87-3.346 451.648.356zM181.443 445.511c-27.362 28.85-87.899 45.654-141.767 31.287 30.12-48.043 4.229-91.124 36.214-131.106 26.246-32.808 79.034-41.993 109.709-11.317 35.839 35.843 19.145 86.566-4.156 111.136zm3.07-148.841c7.354-10.167 18.887-25.865 33.29-44.659l49.22 49.224c-18.125 14.906-33.263 26.86-43.077 34.494-8.842-15.879-22.526-30.108-39.433-39.059zM481.948 55.316c-3.368 63.004-143.842 186.021-191.797 226.621l-53.785-53.79c39.458-49.96 155.261-191.312 218.422-197.954 16.851-1.775 28.03 8.858 27.16 25.123z"/>
       </svg>
     </button>
     <button className="theme-color pink" data-color="pink" title="Pink">
       <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" >
         <defs/>
         <path fill="#fff" d="M451.648.356c-25.777 2.712-56.79 19.872-94.811 52.46-68.786 58.958-149.927 160.756-202.185 234-38.158-5.951-78.375 10.368-102.187 40.133C8.758 381.584 45.347 430.34 4.12 473.811c-7.179 7.569-4.618 20.005 4.98 24.114 67.447 28.876 153.664 10.879 194.109-31.768 24.718-26.063 38.167-64.54 31.411-100.762 72.281-55.462 172.147-140.956 228.7-211.885 31.316-39.277 47.208-70.872 48.584-96.59C513.759 22.273 486.87-3.346 451.648.356zM181.443 445.511c-27.362 28.85-87.899 45.654-141.767 31.287 30.12-48.043 4.229-91.124 36.214-131.106 26.246-32.808 79.034-41.993 109.709-11.317 35.839 35.843 19.145 86.566-4.156 111.136zm3.07-148.841c7.354-10.167 18.887-25.865 33.29-44.659l49.22 49.224c-18.125 14.906-33.263 26.86-43.077 34.494-8.842-15.879-22.526-30.108-39.433-39.059zM481.948 55.316c-3.368 63.004-143.842 186.021-191.797 226.621l-53.785-53.79c39.458-49.96 155.261-191.312 218.422-197.954 16.851-1.775 28.03 8.858 27.16 25.123z"/>
       </svg>
     </button>
     <button className="theme-color navy-dark active" data-color="navy-dark" title="Navy Dark">
       <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
         <defs/>
         <path fill="#fff" d="M451.648.356c-25.777 2.712-56.79 19.872-94.811 52.46-68.786 58.958-149.927 160.756-202.185 234-38.158-5.951-78.375 10.368-102.187 40.133C8.758 381.584 45.347 430.34 4.12 473.811c-7.179 7.569-4.618 20.005 4.98 24.114 67.447 28.876 153.664 10.879 194.109-31.768 24.718-26.063 38.167-64.54 31.411-100.762 72.281-55.462 172.147-140.956 228.7-211.885 31.316-39.277 47.208-70.872 48.584-96.59C513.759 22.273 486.87-3.346 451.648.356zM181.443 445.511c-27.362 28.85-87.899 45.654-141.767 31.287 30.12-48.043 4.229-91.124 36.214-131.106 26.246-32.808 79.034-41.993 109.709-11.317 35.839 35.843 19.145 86.566-4.156 111.136zm3.07-148.841c7.354-10.167 18.887-25.865 33.29-44.659l49.22 49.224c-18.125 14.906-33.263 26.86-43.077 34.494-8.842-15.879-22.526-30.108-39.433-39.059zM481.948 55.316c-3.368 63.004-143.842 186.021-191.797 226.621l-53.785-53.79c39.458-49.96 155.261-191.312 218.422-197.954 16.851-1.775 28.03 8.858 27.16 25.123z"/>
       </svg>
     </button>
     <button className="theme-color dark" data-color="dark" title="Dark">
       <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
         <defs/>
         <path fill="currentColor" d="M451.648.356c-25.777 2.712-56.79 19.872-94.811 52.46-68.786 58.958-149.927 160.756-202.185 234-38.158-5.951-78.375 10.368-102.187 40.133C8.758 381.584 45.347 430.34 4.12 473.811c-7.179 7.569-4.618 20.005 4.98 24.114 67.447 28.876 153.664 10.879 194.109-31.768 24.718-26.063 38.167-64.54 31.411-100.762 72.281-55.462 172.147-140.956 228.7-211.885 31.316-39.277 47.208-70.872 48.584-96.59C513.759 22.273 486.87-3.346 451.648.356zM181.443 445.511c-27.362 28.85-87.899 45.654-141.767 31.287 30.12-48.043 4.229-91.124 36.214-131.106 26.246-32.808 79.034-41.993 109.709-11.317 35.839 35.843 19.145 86.566-4.156 111.136zm3.07-148.841c7.354-10.167 18.887-25.865 33.29-44.659l49.22 49.224c-18.125 14.906-33.263 26.86-43.077 34.494-8.842-15.879-22.526-30.108-39.433-39.059zM481.948 55.316c-3.368 63.004-143.842 186.021-191.797 226.621l-53.785-53.79c39.458-49.96 155.261-191.312 218.422-197.954 16.851-1.775 28.03 8.858 27.16 25.123z"/>
       </svg>
     </button>
   </div>
   </div>
</div>
    <style>{`

.app-right {
    flex-basis: 320px;
    flex-shrink: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    transition: 0.2s;
    overflow: auto;
    max-width: 32em;
  }
  .app-right .app-profile-box img {
    margin-bottom: 16px;
  }
  .app-right .app-profile-box-title {
    width: 100%;
    color: var(--text-dark);
    display: flex;
    align-items: center;
  }
  .app-right .app-profile-box-title svg {
    width: 16px;
    margin-right: 6px;
  }
  
  .archive-btn {
    color: #fff;
    height: 32px;
    margin-top: 16px;
    border-radius: 4px;
    background-color: var(--button-bg);
    display: flex;
    align-items: center;
    font-size: 14px;
    border: none;
  }
  .archive-btn svg {
    margin-left: 6px;
  }
  
  .app-activity-box {
    border-radius: 10px;
    padding: 16px 16px 8px 16px;
    border: 1px solid var(--box-border);
    background-color: var(--box-color);
  }
  
  .activity-info-boxes {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .activity-info-box {
    width: 48%;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 8px;
    display: flex;
  }
  .activity-info-box.time {
    background-color: var(--info-box-1);
    color: var(--info-box-color-1);
  }
  .activity-info-box.time .info-icon-wrapper {
    background-color: var(--info-icon-bg-1);
  }
  .activity-info-box.atendee {
    background-color: var(--info-box-2);
    color: var(--info-box-color-2);
  }
  .activity-info-box.atendee .info-icon-wrapper {
    background-color: var(--info-icon-bg-2);
  }
  .activity-info-box.meeting {
    background-color: var(--info-box-3);
    color: var(--info-box-color-3);
  }
  .activity-info-box.meeting .info-icon-wrapper {
    background-color: var(--info-icon-bg-3);
  }
  .activity-info-box.reject {
    background-color: var(--info-box-4);
    color: var(--info-box-color-4);
  }
  .activity-info-box.reject .info-icon-wrapper {
    background-color: var(--info-icon-bg-4);
  }
  
  .info-icon-wrapper {
    border-radius: 50%;
    margin-right: 4px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .info-icon-wrapper svg {
    width: 16px;
    height: 16px;
  }
  
  .info-text-wrapper span {
    display: block;
  }
  
  .info-text-upper {
    font-size: 14px;
    font-weight: 700;
  }
  
  .info-text-bottom {
    font-size: 10px;
    color: var(--text-light);
  }
  
  .activity-info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px;
    margin-top: 16px;
  }
  
  .info-header-bold {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: var(--text-dark);
  }
  
  .info-header-light {
    color: var(--text-light);
    font-size: 12px;
    line-height: 24px;
  }
  
  .activity-days-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
  
  .day {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 64px;
  }
  .day.current .chart {
    opacity: 1;
    transform: scale(1.2);
    transform-origin: bottom;
  }
  .day:first-child .chart {
    height: 20%;
  }
  .day:nth-child(3) .chart {
    height: 100%;
  }
  .day .chart {
    border-radius: 6px;
    height: 50%;
    width: 6px;
    background-color: var(--button-bg);
    opacity: 0.5;
    position: relative;
  }
  .day .chart:before {
    content: "";
    position: absolute;
    background-color: var(--button-bg);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    top: calc(100% + 4px);
  }
  .day span {
    margin-top: 20px;
    display: block;
    font-size: 10px;
    color: var(--text-light);
  }
  
  .app-right-bottom {
    position: fixed;
    bottom: 0;
    right: 24px;
    z-index: 1;
    background-color: var(--app-bg);
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    padding-bottom: 10px;
  }
  
  .app-theme-selector {
    background-color: var(--box-color);
    box-shadow: var(--box-shadow);
    border: 1px solid var(--box-border);
    display: flex;
    justify-content: flex-end;
    width: auto;
    padding: 10px;
    border-radius: 6px;
  }
  
  .theme-color {
    width: 24px;
    height: 24px;
    margin-left: 4px;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: #fff;
    cursor: pointer;
  }
  .theme-color.active {
    border: 1px solid #477eff;
    box-shadow: 0 0 0 3px rgba(71, 126, 255, 0.2);
  }
  .theme-color svg {
    width: 14px;
    height: 14px;
  }
  .theme-color.indigo {
    background-color: #18689C;
  }
  .theme-color.pink {
    background-color: #e8d5db;
  }
  .theme-color.dark {
    background-color: #060415;
  }
  .theme-color.navy-dark {
    background-color: #192734;
    color: #fff;
  }
  
  .open-left, .open-right {
    position: absolute;
    padding: 0;
    display: none;
    width: 20px;
    height: 20px;
    background-color: var(--box-color);
    box-shadow: var(--box-shadow);
    border: 1px solid var(--box-border);
    border-radius: 4px;
    top: 24px;
  }
  
  .open-left {
    left: 0;
  }
  
  .open-right {
    right: 0;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--scrollbar-thumb);
  }
  
  @media screen and (max-width: 1025px) {
    .app-left {
      transform: translateX(-100%);
      position: absolute;
      opacity: 0;
      top: 0;
      z-index: 2;
      height: 100%;
      width: 100%;
      transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
    }
    .app-left.open {
      transform: translateX(0);
      opacity: 1;
    }
  
    .open-left {
      display: block;
    }
  }
  @media screen and (max-width: 680px) {
    .app-right {
      transform: translateX(100%);
      position: absolute;
      opacity: 0;
      top: 0;
      z-index: 2;
      height: 100%;
      width: 100%;
      transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
    }
    .app-right.open {
      transform: translateX(0);
      opacity: 1;
    }
  
    .open-right {
      display: block;
    }
  
    .app-theme-selector {
      position: fixed;
      bottom: 0;
    }
  
    .app-main {
      height: calc(100% - 48px);
    }
  }
  `}</style>
        </>
    )
}

export default SideMenu
