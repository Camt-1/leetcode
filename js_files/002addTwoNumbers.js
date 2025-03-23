const addTwoNumbers = function(l1, l2) {
    let head = null, tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum /10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
};

//定义ListNode类
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

//构造测试数据
function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

//编写一个函数,将链表转换为数组,方便结果对比:
function listToArray(list) {
    let arr = [];
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

//运行测试
let l1 = arrayToList([2, 4, 3]); //表示342
let l2 = arrayToList([5, 6, 4]); //表示465

//调用函数
let result = addTwoNumbers(l1, l2);

//输出测试结果
console.log(listToArray(result)); //输出为[7, 0, 8],表示807