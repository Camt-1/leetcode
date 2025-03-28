# 两数之和
> 给定一个数组nums和一个整数目标值target,
在数组中找出和为目标值target的那两个整数,并返回它们的下标



1. 暴力穷举  

枚举数组中的每一个数x,寻找数组中是否存在target - x

当使用遍历整个数组的方式寻找target-x时,需要注意到每一个位于x之前的元素都和x匹配过,
因此不需要进行匹配.而每一个元素不能被使用两次,所以只需要在x后面的元素中寻找target-x

时间复杂度O(N**2) 空间复杂度O(1)


2. 哈希表  

使用哈希表可以将寻找target-x的时间复杂度降低到从O(N)到O(1)

创建一个哈希表,对于每一个x,首先查询哈希表中是否存在target-x,
然后将x插入到哈希表中,即可保证不会让x和自己匹配

时间复杂度O(N) 空间复杂度O(N)
