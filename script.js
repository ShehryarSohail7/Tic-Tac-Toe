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
  return winning_combinations.some((combination) => {
    return combination.every((num) => test.includes(num));
  });
};

function check_winner(player, box_num) {
  if (is_there_a_winner) {
    return;
  }
  if (player === "X") {
    playerX.push(box_num);
    if (found(playerX)) {
      is_there_a_winner = true;
      popping();
      return;
    }
  } else if (player === "O") {
    playerO.push(box_num);
    if (found(playerO)) {
      is_there_a_winner = true;
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
    tick_cross.src = "/Tic Tac Toe/images/cross.png";
  } else if (player === "O") {
    tick_cross.src = "/Tic Tac Toe/images/circle.png";
  }
  tick_cross.alt = "tick_cross";
  tick_cross.style.width = "100%";
  tick_cross.style.height = "auto";
  return tick_cross;
}

// ------------------------------------pop up-----------------------------------

function popping() {
  pop_up.classList.remove("d-none");
  if (is_there_a_winner === true) {
    pop_up_msg.innerHTML = `Player ${player} won!!`;
  } else {
    pop_up_msg.innerHTML = `It's a draw :/`;
  }
}

// ------------------------------------all the buttons-----------------------------------
let box1_control = false;

box_1.addEventListener("click", () => {
  console.log(box_1);
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
  console.log(box_2);
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
  console.log(box_3);
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
  console.log(box_4);
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
  console.log(box_5);
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
  console.log(box_6);
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
  console.log(box_7);
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
  console.log(box_8);
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
  console.log(box_9);
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

  player = "X";
  playerX = [];
  playerO = [];
  is_there_a_winner = false;
  pop_up.classList.add("d-none");
});

pop_up_btn.addEventListener("click", () => {
  pop_up.classList.add("d-none");
});
