# 两数相加
> 给两个非空的链表,表示两个非负的整数.它们每位数字都是按照逆序的方式存储的,
并且每个节点,只存储一位数字  
将两数相加,并以相同形式返回一个表示和的链表

由于输入的两个链表都是逆序存储数字的位数的,因此两个链表中同一位置的数字可以直接相加  
同时遍历两个链表,逐位计算它们的和,并与当前位置的进位值相加.

具体而言,如果当前两个链表对应的数字为n1, n2 ,进位值为carry,则它们的和为n1 + n2 + carry;  
其中,答案链表处相应位置的数字为(n1 + n2 + carry)mod10,而新的进位值为[(n1 + n2 + carry) / 10]

如果两个链表的长度不同,则可以认为长度短的后面有若干个0.  

此外,如果链表遍历结束后,有carry>0,还需要在答案链表后面附加一个节点,节点的值为carry