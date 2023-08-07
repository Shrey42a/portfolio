import React from "react";
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <>
        <ul className="navbar lg:block md:block hidden space-y-4 px-2 flex-col py-3 items-center justify-center rounded-full h-max w-max">
              <li className="z-10 hover:bg-black rounded-full p-3 transition ease-in-out">
                <Link to="home" activeclass='disable' smooth={true} spy={true} duration={500}><svg className="cursor-pointer w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.8640000000000001"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 20H7C5.89543 20 5 19.1046 5 18V10.9199C5 10.336 5.25513 9.78132 5.69842 9.40136L10.6984 5.11564C11.4474 4.47366 12.5526 4.47366 13.3016 5.11564L18.3016 9.40136C18.7449 9.78132 19 10.336 19 10.9199V18C19 19.1046 18.1046 20 17 20H15M9 20V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V20M9 20H15" stroke="#b5b5ba" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></Link>
              </li>
              <li className="hover:bg-black rounded-full p-3 transition ease-in-out">
                <Link to="about" activeclass='active' smooth={true} spy={true} duration={500} ><svg className="cursor-pointer w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#b5b5ba"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M12.1605 10.87C12.0605 10.86 11.9405 10.86 11.8305 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0005 2C14.4505 2 16.4405 3.99 16.4405 6.44C16.4305 8.84 14.5405 10.79 12.1605 10.87Z" stroke="#b5b5ba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M7.1607 14.56C4.7407 16.18 4.7407 18.82 7.1607 20.43C9.9107 22.27 14.4207 22.27 17.1707 20.43C19.5907 18.81 19.5907 16.17 17.1707 14.56C14.4307 12.73 9.9207 12.73 7.1607 14.56Z" stroke="#b5b5ba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></Link>
              </li>
              <li className="hover:bg-black rounded-full p-3 transition ease-in-out">
                <Link to="skills" activeclass='active' smooth={true} spy={true} duration={500}><svg className="cursor-pointer w-6 h-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M998.936064 240.238415L521.756297 4.775434a19.34316 19.34316 0 0 0-25.451526 0L19.125004 240.238415c-12.798482 0-19.125004 12.725763-19.125004 25.451527s6.326522 25.451527 19.125004 25.451526l477.179767 235.390263c6.399241 0 6.399241 6.399241 12.725763 6.399241s6.326522 0 12.725763-6.399241l375.37366-184.487209v267.24103c0 19.052286 12.798482 31.778049 31.850768 31.778049 19.125004 0 31.778049-12.725763 31.778049-31.778049V310.193754l38.17729-19.052286c12.798482 0 19.125004-12.725763 19.125004-25.451526s-6.326522-25.451527-19.125004-25.451527zM509.030534 462.902914L101.806107 265.689942 509.030534 68.40425l407.224427 197.285692L509.030534 462.902914z m279.966794-28.869303c19.052286 0 31.850768 12.725763 31.850767 31.778049v293.274306c0 6.326522-6.399241 19.052286-19.125004 25.451527A706.970693 706.970693 0 0 1 509.030534 848.16631c-108.132629 0-210.011455-19.125004-292.692557-63.628817-12.725763 0-19.125004-12.725763-19.125004-25.451527V465.81166c0-19.052286 12.798482-31.778049 31.850767-31.778049 19.125004 0 31.778049 12.725763 31.778049 31.778049v274.149302c140.056116 63.628817 356.321374 63.628817 496.37749 0v-274.149302c0-19.052286 12.653045-31.778049 31.778049-31.778049z" fill="#b5b5ba"></path></g></svg></Link>
              </li>
              <li className="hover:bg-black rounded-full p-3 transition ease-out">
                <Link to="project" activeclass='active' smooth={true} spy={true} duration={500}><svg className="cursor-pointer w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235" stroke="#b5b5ba" strokeWidth="1.5"></path> <path d="M7 16V2.5" stroke="#b5b5ba" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M10 22C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8M14 22C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V12" stroke="#b5b5ba" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg></Link>
              </li>
              <li className="hover:bg-black rounded-full p-3 transition ease-in-out">
                <Link to="contact" activeclass='active' smooth={true} spy={true} duration={500}><svg className="cursor-pointer w-6 h-6" fill="#b5b5ba" viewBox="0 0 64 64" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="#b5b5ba"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_x32_5_attachment"></g> <g id="_x32_4_office"></g> <g id="_x32_3_pin"></g> <g id="_x32_2_business_card"></g> <g id="_x32_1_form"></g> <g id="_x32_0_headset"></g> <g id="_x31_9_video_call"></g> <g id="_x31_8_letter_box"></g> <g id="_x31_7_papperplane"></g> <g id="_x31_6_laptop"></g> <g id="_x31_5_connection"></g> <g id="_x31_4_phonebook"></g> <g id="_x31_3_classNameic_telephone"></g> <g id="_x31_2_sending_mail"></g> <g id="_x31_1_man_talking"></g> <g id="_x31_0_date"></g> <g id="_x30_9_review"></g> <g id="_x30_8_email"> <g> <g> <path d="M35.0137,31.8325c0.5488-0.0596,0.9453-0.5532,0.8857-1.1021c-0.0596-0.5493-0.5518-0.9434-1.1025-0.8862 c-6.4932,0.7036-9.5806-1.688-11.0259-3.8203c-2.0195-2.98-2.0645-7.2817-0.1143-10.959 c1.9429-3.6626,5.356-5.7627,9.3657-5.7627c0.001,0,0.002,0,0.0029,0c3.0547,0,5.7949,1.2461,7.3301,3.3325 c1.6016,2.1763,1.8633,5.2012,0.7578,8.7485c-0.4336,1.3921-1.8486,3.2183-3.0938,3.5781 c-0.5078,0.1484-0.9092,0.0938-1.2236-0.1665c-0.3623-0.3013-0.4922-0.769-0.4814-0.9541 c0.002-0.0117,0.0029-0.0225,0.0039-0.0342l1.0957-10.9561c0.0586-0.5493-0.3389-1.042-0.8877-1.1001 c-0.5586-0.061-1.042,0.3389-1.1006,0.8882l-0.0969,0.9086c-0.0175-0.013-0.0319-0.0287-0.0496-0.0414 c-1.2813-0.9214-3.0767-1.0112-4.8047-0.2397c-2.9424,1.3115-5.0669,5.48-4.5469,8.9199c0.3901,2.5801,2.209,4.251,4.9917,4.5845 c1.2773,0.1519,2.8452-0.2251,4.0083-1.085c0.1689,0.2427,0.3682,0.4634,0.5908,0.6484 c0.8242,0.6836,1.9092,0.8794,3.0566,0.5488c2.0088-0.5811,3.8389-2.9502,4.4482-4.9048 c1.6445-5.2793,0.333-8.6396-1.0566-10.5283c-1.9111-2.5972-5.2539-4.1475-8.9414-4.1475c-0.001,0-0.002,0-0.0029,0 c-4.7739,0-8.8315,2.4878-11.1323,6.8252c-2.293,4.3232-2.2046,9.4331,0.2256,13.0186 c2.1333,3.1475,5.8232,4.8188,10.5332,4.8188C33.4111,31.9648,34.2002,31.9209,35.0137,31.8325z M34.9131,17.4961l-0.5693,5.9414 c-0.5811,0.9546-2.1055,1.4746-3.1875,1.3472c-1.9009-0.228-2.9946-1.2026-3.251-2.8975 c-0.3848-2.5454,1.2593-5.8477,3.3838-6.7949c0.5137-0.229,1.0332-0.3433,1.5107-0.3433c0.5029,0,0.96,0.1274,1.3115,0.3804 C34.7412,15.582,35.0176,16.4004,34.9131,17.4961z"></path> <path d="M59.3057,21.6533l-7.2637-4.4982V2c0-0.5522-0.4473-1-1-1H12.4771c-0.5522,0-1,0.4478-1,1v15.0159 c-3.4714,2.1884-5.806,3.7847-6.9165,4.7346c-1.5254,1.3042-2.3652,3.1631-2.3652,5.2334v29.0249 C2.1953,59.8638,5.3315,63,9.186,63h45.6284c1.8837,0,3.5925-0.7524,4.8508-1.9683c0.0023-0.0023,0.0054-0.003,0.0076-0.0053 c0.0011-0.0012,0.0013-0.0027,0.0024-0.0039c1.3107-1.2715,2.1294-3.0475,2.1294-5.0137V26.9839 C61.8047,25.2393,61.1504,22.7964,59.3057,21.6533z M52.042,19.5073l5.0593,3.1331l-5.0593,4.4129V19.5073z M58.784,23.826 c0.6964,0.7996,1.0207,2.077,1.0207,3.1579v29.0249c0,1.0747-0.3491,2.0649-0.9291,2.8804L39.5911,40.5665L58.784,23.826z M13.4771,3H50.042v25.7969L31.998,44.5361l-18.521-16.1475V3z M11.4771,19.3841v7.2624L6.7792,22.551 C7.835,21.7673,9.4214,20.6976,11.4771,19.3841z M4.1953,56.0088V26.9839c0-1.1927,0.3796-2.2405,1.0782-3.0918l19.8513,17.3058 L5.7814,59.6376C4.8109,58.7264,4.1953,57.4419,4.1953,56.0088z M9.186,61c-0.5724,0-1.1138-0.1168-1.6263-0.295l19.0789-18.1874 l4.7021,4.0992c0.1885,0.1641,0.4229,0.2461,0.6572,0.2461s0.4692-0.082,0.6572-0.2466l5.4222-4.7294l19.3299,18.3657 C56.6494,60.7177,55.7672,61,54.8145,61H9.186z"></path> </g> </g> </g> <g id="_x30_7_information"></g> <g id="_x30_6_phone_talking"></g> <g id="_x30_5_women_talking"></g> <g id="_x30_4_calling"></g> <g id="_x30_3_women"></g> <g id="_x30_2_writing"></g> <g id="_x30_1_chatting"></g> </g></svg></Link>
              </li>
        </ul>
    </>
  );
}
export default Navbar;