/**
 * Created by thienphuc on 09/01/2017.
 */

/** define key code **/
KEY = {
    DOWN: 40,
    RIGHT: 39,
    UP: 38,
    LEFT: 37,
    SPACE: 32,
    FIRE: 70
};

/** bool key variable **/
var isLeftKey = false;
var isRightKey = false;
var isUpKey = false;
var isDownKey = false;
var isSpaceKey = false;
var isFKey = false;

/** key down event **/
function keyDown(event) {
    var code = event.keyCode;
    switch (code) {
        case KEY.UP:
            isUpKey = true;
            break;
        case KEY.DOWN:
            isDownKey = true;
            break;
        case KEY.LEFT:
            isLeftKey = true;
            break;
        case KEY.RIGHT:
            isRightKey = true;
            break;
        case KEY.SPACE:
            isSpaceKey = true;
            break;
        case KEY.FIRE:
            isFKey = true;
            break;
    }
}

/** key up event **/
function keyUp(event) {
    var code = event.keyCode;
    switch (code) {
        case KEY.UP:
            isUpKey = false;
            break;
        case KEY.DOWN:
            isDownKey = false;
            break;
        case KEY.LEFT:
            isLeftKey = false;
            break;
        case KEY.RIGHT:
            isRightKey = false;
            break;
        case KEY.SPACE:
            isSpaceKey = false;
            break;
        case KEY.FIRE:
            isFKey = false;
            break;
    }
}