/* ====================================================
// HELPER FUNCTIONS
======================================================= */
const isPressed = el => {
  if (el.classList.contains("button-pressed")) {
    return true;
  } else return false;
};
const changeButton = el => {
  if (isPressed(el)) {
    el.classList.remove("button-pressed");
    el.classList.add("button-unpressed");
  } else {
    el.classList.remove("button-unpressed");
    el.classList.add("button-pressed");
  }
};
const renderEl = (parent, el, className = "") => {
  el.setAttribute("class", className);
  parent.appendChild(el);
};
const createDefaultInputGroup = (className = "", id, pl) => {
  let formGroup = document.createElement("div");
  let label = document.createElement("label");
  let input = document.createElement("input");

  formGroup.setAttribute("class", "form-group");
  formGroup.setAttribute("id", `fGroup-${id}`);

  label.setAttribute("for", id);
  label.setAttribute("class", "default-label");
  label.textContent = `Enter ${id} : `;
  label.style.width = "20rem";

  input.setAttribute("type", "text");
  input.setAttribute('class', className);
  input.setAttribute("id", id);
  input.setAttribute("placeholder", pl);

  formGroup.appendChild(label);
  formGroup.appendChild(input);

  return formGroup;
};
const resetFields = (formgroup1, fg2, fg3, fg4) => {
  formgroup1.querySelector(".default-input").value = "";
  fg2.querySelector(".default-input").value = "";
  fg3.querySelector(".default-input").value = "";
  fg4.querySelector(".default-input").value = "";
};
var promptTimeout;
const prompt = () => {
    renderEl(rigthCTerminal, rightCPrompt);
    promptTimeout = window.setTimeout(() => {
            if(rightCPrompt != null)
            {rigthCTerminal.removeChild(rightCPrompt)};
            } , 500)
};
var logPrompt;
const unlogPrompt = (logPr) => {
    window.clearTimeout(promptTimeout);
    window.clearInterval(logPr);
}
const changeMainCFooter = () => {
  if(mainCFooter.classList.contains('main-c__footer__hidden'))
  {
    mainCFooter.classList.remove('main-c__footer__hidden');
    mainCFooter.classList.add('main-c__footer__visible');
  }
  else
  {
    mainCFooter.classList.remove('main-c__footer__visible');
    mainCFooter.classList.add('main-c__footer__hidden');
  }
}



/* ====================================================
// DOM ELEMENTS
======================================================= */
mainCContainer = document.querySelector("#main-c-container");
mainC = document.querySelector("#main-c");
mainCFooter = document.querySelector("#main-c__footer");
rightC = document.querySelector("#right-c-container");
rightCPrompt = document.createElement('span');
rightCPrompt.innerHTML = ">";
rightCMsg = document.createElement('div');
rigthCTerminal = document.querySelector("#right-c__terminal");


/* ====================================================
// LANDING-PAGE CONTENT
======================================================= */
mainCInfo = document.createElement('div');
mainCInfo.innerHTML = `
<h4> Welcome on the FISDN admin-page. </h4>
<p>These links could help to monitor your raw data : <br>
<span>Get all films : </span><a class="main-c__infoLink" href="http://fisdn.org/api/films" target="_blank">fisdn.org/api/films</a><br>
<span>Get all festivals : </span><a class="main-c__infoLink" href="http://fisdn.org/api/festivals" target="_blank">fisdn.org/api/festivals</a><br>
<span>Get all projections : </span><a class="main-c__infoLink" href="http://fisdn.org/api/projections" target="_blank">fisdn.org/api/projections</a><br>
</p>
<p>
<span>You can add "/id" to get a SINGLE object, e.g: <br></span>
<a class="main-c__infoLink" href="http://fisdn.org/api/films/1" target="_blank">fisdn.org/api/films/1</a><br>
<a class="main-c__infoLink" href="http://fisdn.org/api/festivals/1" target="_blank">fisdn.org/api/festivals/1</a><br>
<a class="main-c__infoLink" href="http://fisdn.org/api/projections/1" target="_blank">fisdn.org/api/festivals/1</a><br>
</p>
<p>This other link will provide you with a script designed to <br>
help building new web-pages, <br>
<span></span><a class="main-c__infoLink" href="" target="_blank">fisdn.org/api/tools/script</a><br>
</p>
<p>And of course, you know what all of this is for :<br>
<span></span><a class="main-c__infoLink" href="http://fisdn.org/archive" target="_blank">fisdn.org/archive</a><br>
</p>
`;
// Render this at start: 
renderEl(mainC, mainCInfo, "main-c__info");



/* ====================================================
// BUTTONS
======================================================= */

let buttonFilm = document.querySelector("#button-film");
let buttonFestival = document.querySelector("#button-festival");
let buttonProjection = document.querySelector("#button-projection");
let buttonCreate = document.querySelector("#left-c__buttonCreate");
let buttonDelete = document.querySelector("#left-c__buttonDelete");
let buttonUpdate = document.querySelector("#left-c__buttonUpdate");
let buttonReset = document.querySelector("#main-c__resetButton");
let buttonExec = document.querySelector("#main-c__execButton");
let buttonLogs = document.querySelector("#right-c__buttonLogs");




/* ====================================================
// BUTTON'CLICK LOGIC
======================================================= */

buttonFilm.addEventListener("click", () => {
  changeButton(buttonFilm);
  if (isPressed(buttonFestival)) {
    changeButton(buttonFestival);
  }
  if (isPressed(buttonProjection)) {
    changeButton(buttonProjection);
  }
  if (isPressed(buttonCreate)) {
    changeButton(buttonCreate);
  }
  if (isPressed(buttonDelete)) {
    changeButton(buttonDelete);
  }
  if (isPressed(buttonUpdate)) {
    changeButton(buttonUpdate);
  }
});

buttonFestival.addEventListener("click", () => {
  changeButton(buttonFestival);
  if (isPressed(buttonFilm)) {
    changeButton(buttonFilm);
  }
  if (isPressed(buttonProjection)) {
    changeButton(buttonProjection);
  }
  if (isPressed(buttonCreate)) {
    changeButton(buttonCreate);
  }
  if (isPressed(buttonDelete)) {
    changeButton(buttonDelete);
  }
  if (isPressed(buttonUpdate)) {
    changeButton(buttonUpdate);
  }
});

buttonProjection.addEventListener("click", () => {
  changeButton(buttonProjection);
  if (isPressed(buttonFilm)) {
    changeButton(buttonFilm);
  }
  if (isPressed(buttonFestival)) {
    changeButton(buttonFestival);
  }
  if (isPressed(buttonCreate)) {
    changeButton(buttonCreate);
  }
  if (isPressed(buttonDelete)) {
    changeButton(buttonDelete);
  }
  if (isPressed(buttonUpdate)) {
    changeButton(buttonUpdate);
  }
});

buttonCreate.addEventListener("click", () => {
  if (
    isPressed(buttonFilm) ||
    isPressed(buttonFestival) ||
    isPressed(buttonProjection)
  ) {
    changeButton(buttonCreate);
    if (isPressed(buttonDelete)) {
      changeButton(buttonDelete);
    }
    if (isPressed(buttonUpdate)) {
      changeButton(buttonUpdate);
    }
  }
});

buttonDelete.addEventListener("click", () => {
  if (
    isPressed(buttonFilm) ||
    isPressed(buttonFestival) ||
    isPressed(buttonProjection)
  ) {
    changeButton(buttonDelete);
    if (isPressed(buttonCreate)) {
      changeButton(buttonCreate);
    }
    if (isPressed(buttonUpdate)) {
      changeButton(buttonUpdate);
    }
  }
});

buttonUpdate.addEventListener("click", () => {
  if (
    isPressed(buttonFilm) ||
    isPressed(buttonFestival) ||
    isPressed(buttonProjection)
  ) {
    changeButton(buttonUpdate);
    if (isPressed(buttonCreate)) {
      changeButton(buttonCreate);
    }
    if (isPressed(buttonDelete)) {
      changeButton(buttonDelete);
    }
  }
});


/* ====================================================
// INTERFACES FILM
// CREATION D'INPUTS
======================================================= */
let filmEnglishTitleInputGroup = createDefaultInputGroup(
  "default-input",
  "filmEnglishTitle",
  "at least 4 char."
);
let directorNameInputGroup = createDefaultInputGroup(
  "default-input",
  "directorName",
  "at least 4 char."
);
let filmYearInputGroup = createDefaultInputGroup(
  "default-input",
  "filmYear",
  "between 1800 and 3000"
);
let filmImageInputGroup = createDefaultInputGroup(
  "default-input",
  "filmImage",
  "pattern.png"
);
let filmIdInputGroup__delete = createDefaultInputGroup(
  "default-input",
  "filmEnglishTitle",
  "at least 4 char."
);


/* ====================================================
// INTERFACE FILM CREATE
======================================================= */
buttonCreate.addEventListener("click", () => {
  if (!isPressed(buttonCreate) || !isPressed(buttonFilm)) {
    mainC.innerHTML = "";
    renderEl(mainC, mainCInfo, "main-c__info");


  } else {
    if (isPressed(buttonFilm)) {
      mainC.innerHTML = "";
      renderEl(mainC, mainCFooter, "form-group");
      renderEl(mainC, filmEnglishTitleInputGroup, "form-group");
      renderEl(mainC, directorNameInputGroup, "form-group");
      renderEl(mainC, filmYearInputGroup, "form-group");
      renderEl(mainC, filmImageInputGroup, "form-group");
      renderEl(mainC, mainCFooter, "main-c__footer__visible")
    }
  }
});

/* ====================================================
// OTHER INTERFACES
======================================================= */
buttonFilm.addEventListener("click", () => {
  if (!isPressed(buttonFilm)) {
    mainC.innerHTML = "";
    renderEl(mainC, mainCInfo, "main-c__info");
  }
});

buttonFestival.addEventListener("click", () => {
  if (isPressed(buttonFestival)) {
    mainC.innerHTML = "";
  }
});

buttonProjection.addEventListener("click", () => {
  if (isPressed(buttonProjection)) {
    mainC.innerHTML = "";
  }
});

buttonDelete.addEventListener("click", () => {
  if (isPressed(buttonDelete)) {
    mainC.innerHTML = "";
  }
});

buttonUpdate.addEventListener("click", () => {
  if (isPressed(buttonUpdate)) {
    mainC.innerHTML = "";
  }
});

/* ====================================================
// RESET-EVENT AND EXECUTE-EVENT
======================================================= */
// RESET CREATE FILM
buttonReset.addEventListener("click", () => {
  if(isPressed(buttonFilm) && isPressed(buttonCreate))
  {
    resetFields(
      filmEnglishTitleInputGroup,
      directorNameInputGroup,
      filmYearInputGroup,
      filmImageInputGroup
    );
  }
});

// EXECUTE CREATE FILM
buttonExec.addEventListener("click", () => {
    if(logPrompt)
    {unlogPrompt(logPrompt);}
    rigthCTerminal.innerHTML = "";

    if(isPressed(buttonFilm) && isPressed(buttonCreate))
    {
      let data = {};
      data.filmEnglishTitle = filmEnglishTitleInputGroup.querySelector(".default-input").value.trim();
      data.directorName = directorNameInputGroup.querySelector(".default-input").value.trim();
      if (data.filmEnglishTitle.length > 3 && data.directorName.length > 3) 
    {
        data.filmYear = filmYearInputGroup.querySelector(".default-input").value.trim();
        data.filmYear = parseInt(data.filmYear);
        data.filmImage = filmImageInputGroup.querySelector(".default-input").value.trim();

    // send POST request no need to JSON.stringify() - by the way, it won't work
        axios
        .post("http://fisdn.org/api/films", data)
        .then(function(response) {
            console.log(response);
            if (response.status == 200) {
                rightCMsg.innerHTML = `
                A new film has been created.<br> 
                It has received the ID: ${response.data.insertId}.<br>
                See more info here :<br>
                <a style="color:#ffe66d" href="http://fisdn.org/api/films/${response.data.insertId}" target="_blank">
                fisdn.org/api/films/${response.data.insertId}</a>`;
                renderEl(rigthCTerminal, rightCMsg);

                resetFields(
                    filmEnglishTitleInputGroup,
                    directorNameInputGroup,
                    filmYearInputGroup,
                    filmImageInputGroup
                );
            }
      })
        .catch(function(error) {
            let res = error.response;
            console.log(res);
            if (res.status == 400) {
                rightCMsg.innerHTML = `
                  The film has NOT been created<br> 
                  Please,<br> 
                  be sure that your data is correct !<br>`;
                  renderEl(rigthCTerminal, rightCMsg);

            }
            else
            {
                rightCMsg.innerHTML = `
                  The film has NOT been created: <br> 
                  the server is down.<br>
                  Please contact your admin.<br>
                  status: ${res.status}, <br>
                  statusText: ${res.statusText}
                  `;
                  renderEl(rigthCTerminal, rightCMsg);

            }
        });
      }
      else
      {
          rightCMsg.innerHTML = `
                    Please be sure <br> 
                    that your data is correct !<br>`;
                    renderEl(rigthCTerminal, rightCMsg);
  
      }
    }
});
// RESET DELETE FILM
buttonReset.addEventListener("click", () => {
  if(isPressed(buttonFilm) && isPressed(buttonDelete))
  {
    resetFields(filmIdInputGroup__delete);
  }
});
// EXECUTE DELETE FILM
buttonExec.addEventListener("click", () => {
  if(logPrompt)
  {unlogPrompt(logPrompt);}
  rigthCTerminal.innerHTML = "";

  if(isPressed(buttonFilm) && isPressed(buttonDelete))
  {
    let data = {};
    data.ID = "";
  }

});

/* ====================================================
// LOGS INTERFACE
======================================================= */
buttonLogs.addEventListener("click", () => {
  changeButton(buttonLogs);

  if(logPrompt != null)
  {unlogPrompt(logPrompt);}

  if (isPressed(buttonLogs)) {
    rigthCTerminal.classList.remove("right-c__terminalHidden");
    rigthCTerminal.classList.add("right-c__terminal");
  } else {
    rigthCTerminal.classList.remove("right-c__terminal");
    rigthCTerminal.classList.add("right-c__terminalHidden");
  }
  logPrompt = window.setInterval(prompt, 1000);
  });
