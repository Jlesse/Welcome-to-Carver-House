var ANCHOR_SET = 0.5;
var TILE_POS = 55;
gameBoard = new GameBoard();
gameBoard.generateBoard();
var board = gameBoard.board;

var boardSides = board.length;

var yTilePosition = function(value){
  return TILE_POS * value;
};
var xTilePosition = function(value){
  return TILE_POS * value;
};

var inventory = [];

var floorGroup, activeGroup, itemGroup, menuGroup, furnishGroup;
var cursorPos, cursor;
var floorTile, necklace, key, debugTile;
var yt, xt = 0;
