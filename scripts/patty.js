import { initializeApp } from "firebase/app";
import {
  getDocs,
  getFirestore,
  limit,
  query,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWyBJTwnExY05M48KMndDUxbm84q1036s",
  authDomain: "burks-f4dbf.firebaseapp.com",
  projectId: "burks-f4dbf",
  storageBucket: "burks-f4dbf.firebasestorage.app",
  messagingSenderId: "12445735867",
  appId: "1:12445735867:web:df0ea82095fbf75aeb829e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const container = document.querySelector("#additional-container");
const about = document.querySelector("#About");

function loadAbout() {
  const aboutHtml = `<div class="additional-sidebar">
            <img src="images/patty.jpg" />

            <div class="mobile-container">
              <div class="sidebar-item">
                <i class="fa-solid fa-images"></i>
                <p>Photo Gallery</p>
              </div>

              <div class="sidebar-item">
                <i class="fa-solid fa-mountain-sun"></i>
                <p>Burial Site</p>
              </div>

              <div class="sidebar-item">
                <i class="fa-solid fa-pen-to-square"></i>
                <p>Share memory</p>
              </div>
            </div>
          </div>

          <div class="obituary">
            <h2>Patricia Ann Burks</h2>

            <p>
              Patricia Ann Burks, 69, of Findlay, passed away Tuesday, March 25,
              2025 at her residence.<br /><br />

              Patricia was born October 29, 1955, in Tiffin, to the late Walter
              and Rita (Kuntz) Lonsway. She married James Burks in Tiffin on
              February 24, 1989 and he survives in Findlay.<br /><br />

              Other survivors include her children, Brian (Mimi) Burks of
              Cumming, GA, Nick (Allison) Burks of Canton, GA, Carrie (Craig)
              Evert of Mason, OH, Heidi (Nate) Irwin of Findlay, OH, Steve Burks
              of Ione, CA, thirteen grandchildren, three great-grandchildren,
              three sisters, Sue (Paul) Gerth of Columbus, IN, Nancy (the late
              Bob) Smith of Bettsville, OH and Janis (Kenny) Rumschlag of
              Tiffin, OH.<br /><br />

              Patricia worked as a Real Estate Broker and Agent and was a member
              of Findlay First Lutheran Church. She was a 1974 graduate of
              Tiffin Calvert High School who enjoyed showing houses, traveling,
              local theater and was an avid reader.<br /><br />

              Funeral services for Patricia was held at 2:00 p.m., Monday, March
              31, 2025 at Engle-Shook Funeral Home & Crematory in Tiffin.
              Visitation for family and friends was also held on Monday, from 12
              noon – 2:00 at the funeral home. Burial followed the services on
              Monday, at Pleasant Union cemetery in Old Fort.<br /><br />
            </p>
          </div>`;

  container.innerHTML = aboutHtml;
  container.className = "about-container";
}

loadAbout(); // about is the first section to be shown on load

about.addEventListener("click", () => {
  loadAbout();
});

const Memories = document.querySelector("#Memories");
Memories.addEventListener("click", async () => {
  container.innerHTML = "";
  container.className = "memory-container";

  const comments = query(collection(db, "comments"), limit(4));
  const commentSnap = await getDocs(comments);

  commentSnap.forEach((doc) => {
    const div = document.createElement("div");
    div.classList.add("memory");

    const h3 = document.createElement("h3");
    h3.textContent = doc.data().Name;

    const p = document.createElement("p");
    p.textContent = doc.data().Content;

    div.appendChild(h3);
    div.appendChild(p);

    container.appendChild(div);
    console.log("appended!");
  });

  if (!document.querySelector(".addButton")) {
    const addRef = document.createElement("button");
    addRef.textContent = "Add Memory";
    addRef.classList.add("addButton");
    const addNavRef = document.querySelector("#additional-nav");
    addNavRef.appendChild(addRef);

    addRef.addEventListener("click", async () => {
      const addOverlay = document.createElement("div");
      addOverlay.classList.add("addOverlay");
      document.body.appendChild(addOverlay);

      const addMemContainer = document.createElement("div");
      addMemContainer.id = "addMem";

      // username section
      const nameContainer = document.createElement("div");
      nameContainer.classList.add("memSubContainer");

      const name = document.createElement("p");
      name.textContent = "Name";

      const nameInput = document.createElement("input");
      nameInput.type;

      //
    });
  }
});

const nav_options = document.querySelector("#additional-nav");
const elements = nav_options.querySelectorAll("*");

/*adding the effect to the first element by defualt since that loads by defualt on page load*/
elements[0].classList.add("selected-item");

function clearHighlight() {
  elements.forEach((el) => {
    el.classList.remove("selected-item");
  });
}

elements.forEach((el) => {
  el.addEventListener("click", () => {
    clearHighlight();
    el.classList.add("selected-item");
  });
});
