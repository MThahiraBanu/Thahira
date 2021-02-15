define(["require", "exports", "@syncfusion/ej2-base"], function (require, exports, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ele = document.getElementById('multi_task');
    var dir;
    new ej2_base_1.Touch(ele, { swipe: touchSwipeHandler, scroll: touchScrollHandler });
    function touchSwipeHandler(e) {
        var ele = e.originalEvent.target;
        if (!ele.classList.contains('e-card')) {
            return;
        }
        if (Math.abs(e.distanceX) >= 200) {
            ej2_base_1.detach(ele);
        }
        ele.style.removeProperty('left');
        multiTask();
    }
    function touchScrollHandler(e) {
        var ele = e.originalEvent.target;
        var leftVal = Math.abs(parseInt(ele.style.left, 10));
        if (!ele.classList.contains('e-card')) {
            return;
        }
        if (isNaN(leftVal) || dir !== e.scrollDirection) {
            leftVal = 0;
        }
        if (e.scrollDirection === 'Down') {
            var index = [].slice.call(ele.parentElement.children).indexOf(ele);
            var len = ele.parentElement.childElementCount;
            var el = void 0;
            for (var i = index + 1; i < len; i++) {
                el = ele.parentElement.children[i];
                el.style.top = (parseInt(el.style.top) + e.distanceY) + "px";
            }
        }
        else {
            e.scrollDirection === 'Left' ? ele.style.left = -(leftVal + e.distanceX) + "px" : ele.style.left = (leftVal + e.distanceX) + "px";
        }
        dir = e.scrollDirection;
    }
    function multiTask() {
        var root = document.getElementById("multi_task");
        var activeEle = root.querySelector('.e-card-active');
        if (activeEle) {
            activeEle.classList.remove('e-card-active');
        }
        var multiTask_Ele = document.querySelectorAll('#multi_task .e-card');
        var topRatio = 30;
        var len = multiTask_Ele.length;
        var temp = topRatio;
        for (var i = 0; i < len; i++) {
            multiTask_Ele[i].style.top = temp + 'px';
            temp += topRatio;
        }
        root.classList.add('e-multi-task');
    }
    document.getElementById('multiTaskBtn').onclick = function () {
        multiTask();
    };
    document.getElementById('multi_task').onclick = function (e) {
        var ele = e.target;
        if (!ele.classList.contains('e-card')) {
            return;
        }
        ele.classList.add('e-card-active');
        destroyMultiTask();
    };
    document.getElementById('singleTaskBtn').onclick = function (e) {
        destroyMultiTask();
    };
    document.getElementById('formFlipStructure').onclick = function (e) {
        formFlipStructure();
    };
    document.getElementById('flipStructure').onclick = function (e) {
        var ele = e.target;
        var parentElement = e.currentTarget;
        var el = parentElement.querySelector('card-out');
        if (el) {
            el.classList.remove('card-out');
        }
        if (!ele.classList.contains('e-card')) {
            return;
        }
        ele.classList.add('card-out');
        parentElement.insertBefore(ele, parentElement.children[parentElement.childElementCount]);
        [].slice.call(parentElement.children).forEach(function (ele) {
            ele.removeAttribute('style');
        });
        formFlipStructure();
    };
    function formFlipStructure() {
        var fanStructute_card = document.querySelectorAll('#flipStructure .e-card');
        var len = fanStructute_card.length;
        var transformRatio = 8;
        var temp;
        var divide = (parseInt((len / 2).toString(), 10));
        temp = transformRatio;
        for (var i = divide - 1; i >= 0; i--) {
            fanStructute_card[i].style.transform = 'rotate(' + (temp) + 'deg)';
            temp += transformRatio;
        }
        transformRatio = 8;
        temp = transformRatio;
        for (var i = divide + 1; i < len; i++) {
            fanStructute_card[i].style.transform = 'rotate(' + (-temp) + 'deg)';
            temp += transformRatio;
        }
    }
    function destroyMultiTask() {
        var root = document.getElementById("multi_task");
        root.classList.remove('e-multi-task');
        var multiTask_Ele = document.querySelectorAll('#multi_task .e-card');
        var len = multiTask_Ele.length;
        for (var i = 0; i < len; i++) {
            multiTask_Ele[i].style.removeProperty('top');
        }
    }
});
