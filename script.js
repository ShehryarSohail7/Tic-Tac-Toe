let box_1 = document.querySelector('button[title="box-1"]');
let box_2 = document.querySelector('button[title="box-2"]');
let box_3 = document.querySelector('button[title="box-3"]');
let box_4 = document.querySelector('button[title="box-4"]');
let box_5 = document.querySelector('button[title="box-5"]');
let box_6 = document.querySelector('button[title="box-6"]');
let box_7 = document.querySelector('button[title="box-7"]');
let box_8 = document.querySelector('button[title="box-8"]');
let box_9 = document.querySelector('button[title="box-9"]');

let pop_up = document.querySelector("#pop-up");
let pop_up_msg = document.querySelector("#pop_up_msg");
let pop_up_btn = document.querySelector("#pop_up_button");

let winning_line = document.querySelector("#winning-line");
let diagonal = document.querySelector("#diagonal");

let player = "X";

let playerX = [];
let playerO = [];

let winning_combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let is_there_a_winner = false;

let found = (test) => {
  for (let i = 0; i < winning_combinations.length; i++) {
    if (winning_combinations[i].every((num) => test.includes(num))) {
      return { found: true, index: i };
    }
  }
  return { found: false, index: -1 }; // If no match is found
};

function match_line(index) {
  switch (index) {
    case 0:
      winning_line.style.top = "15%";
      winning_line.classList.remove("d-none");
      break;
    case 1:
      winning_line.classList.remove("d-none");
      break;
    case 2:
      winning_line.style.top = "78%";
      winning_line.classList.remove("d-none");
      break;
    case 3:
      winning_line.style.transform = "rotate(90deg)";
      winning_line.style.left = "14%";
      winning_line.classList.remove("d-none");
      break;
    case 4:
      winning_line.style.transform = "rotate(90deg)";
      winning_line.classList.remove("d-none");
      break;
    case 5:
      winning_line.style.transform = "rotate(90deg)";
      winning_line.style.left = "42%";
      winning_line.classList.remove("d-none");
      break;
    case 6:
      diagonal.classList.remove("diagonal");
      diagonal.classList.add("diagonal-2");
      diagonal.classList.remove("d-none");
      break;
    case 7:
      diagonal.classList.remove("d-none");
      break;
  }
}

function check_winner(player, box_num) {
  if (is_there_a_winner) {
    return;
  }
  if (player === "X") {
    playerX.push(box_num);
    if (found(playerX).found) {
      is_there_a_winner = true;
      match_line(found(playerX).index);
      popping();
      return;
    }
  } else if (player === "O") {
    playerO.push(box_num);
    if (found(playerO).found) {
      is_there_a_winner = true;
      match_line(found(playerO).index);
      popping();
      return;
    }
  }

  // Draw
  if (playerX.length + playerO.length === 9) {
    popping();
  }
}

function tick_cross_img(player) {
  const tick_cross = document.createElement("img");
  if (player === "X") {
    tick_cross.src = "/images/cross.png";
  } else if (player === "O") {
    tick_cross.src = "/images/circle.png";
  }
  tick_cross.alt = "tick_cross";
  tick_cross.style.width = "100%";
  tick_cross.style.height = "auto";
  return tick_cross;
}

// ------------------------------------pop up-----------------------------------
function match_msg(pop_up_msg, player) {
  pop_up_msg.innerHTML = "";

  const textBeforeImg = document.createElement("span");
  textBeforeImg.textContent = "Player";

  const img = document.createElement("img");
  img.src = player === "X" ? "images/cross.png" : "images/circle.png";
  img.alt = `${player} symbol`;
  img.style.width = "40px";
  img.style.position = "relative";
  img.style.top = "-3px";
  img.style.marginLeft = player === "O" ? "2px" : "auto";
  img.style.marginRight = player === "O" ? "2px" : "auto";

  const textAfterImg = document.createElement("span");
  textAfterImg.textContent = "wins!!";

  pop_up_msg.appendChild(textBeforeImg);
  pop_up_msg.appendChild(img);
  pop_up_msg.appendChild(textAfterImg);
}

function popping() {
  pop_up.classList.remove("d-none");
  if (is_there_a_winner === true) {
    if (player === "X") {
      match_msg(pop_up_msg, "X");
      pop_up.style.backgroundColor = "#01D0FB";
    } else {
      match_msg(pop_up_msg, "O");
      pop_up.style.backgroundColor = "#FD4755";
    }
  } else {
    pop_up_msg.innerHTML = `It's a draw :/`;
    pop_up.style.backgroundColor = "grey";
  }
}

// ------------------------------------all the buttons-----------------------------------
let box1_control = false;

box_1.addEventListener("click", () => {
  if (box1_control === false) {
    box_1.append(tick_cross_img(player));
    check_winner(player, 1);
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    box1_control = true;
  }
});

let box2_control = false;

box_2.addEventListener("click", () => {
  if (box2_control === false) {
    box_2.append(tick_cross_img(player));
    check_winner(player, 2);
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    box2_control = true;
  }
});

let box3_control = false;

box_3.addEventListener("click", () => {
  if (box3_control === false) {
    box_3.append(tick_cross_img(player));
    check_winner(player, 3);
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    box3_control = true;
  }
});

let box4_control = false;

box_4.addEventListener("click", () => {
  if (box4_control === false) {
    box_4.append(tick_cross_img(player));
    check_winner(player, 4);
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    box4_control = true;
  }
});

let box5_control = false;

box_5.addEventListener("click", () => {
  if (box5_control === false) {
    box_5.append(tick_cross_img(player));
    check_winner(player, 5);
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    box5_control = true;
  }
});

let box6_control = false;

box_6.addEventListener("click", () => {
  if (box6_control === false) {
    box_6.append(tick_cross_img(player));
    check_winner(player, 6);
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    box6_control = true;
  }
});

let box7_control = false;

box_7.addEventListener("click", () => {
  if (box7_control === false) {
    box_7.append(tick_cross_img(player));
    check_winner(player, 7);
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    box7_control = true;
  }
});

let box8_control = false;

box_8.addEventListener("click", () => {
  if (box8_control === false) {
    box_8.append(tick_cross_img(player));
    check_winner(player, 8);
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    box8_control = true;
  }
});

let box9_control = false;

box_9.addEventListener("click", () => {

  if (box9_control === false) {
    box_9.append(tick_cross_img(player));
    check_winner(player, 9);
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    box9_control = true;
  }
});

reset_button = document.querySelector(".btn");
reset_button.addEventListener("click", () => {
  box_1.innerHTML = "";
  box_2.innerHTML = "";
  box_3.innerHTML = "";
  box_4.innerHTML = "";
  box_5.innerHTML = "";
  box_6.innerHTML = "";
  box_7.innerHTML = "";
  box_8.innerHTML = "";
  box_9.innerHTML = "";

  box1_control = false;
  box2_control = false;
  box3_control = false;
  box4_control = false;
  box5_control = false;
  box6_control = false;
  box7_control = false;
  box8_control = false;
  box9_control = false;

  diagonal.classList.add("d-none");
  diagonal.classList.add("diagonal");
  diagonal.classList.remove("diagonal-2");
  winning_line.classList.add("d-none");
  winning_line.style.transform = "rotate(0deg)";
  winning_line.style.left = "auto";
  winning_line.style.top = "auto";


  player = "X";
  playerX = [];
  playerO = [];
  is_there_a_winner = false;
  pop_up.classList.add("d-none");
});

pop_up_btn.addEventListener("click", () => {
  pop_up.classList.add("d-none");
});
