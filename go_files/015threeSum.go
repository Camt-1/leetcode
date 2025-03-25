package main

import (
	"fmt"
	"sort"
)

func threeSum(nums []int) [][]int {
	sort.Ints(nums) //先排序,方便双指针查找
	result := [][]int{}

	n := len(nums)
	for i := 0; i < n-2; i++ {
		//避免重复
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		left, right := i+1, n-1
		for left < right {
			sum := nums[i] + nums[left] + nums[right]
			if sum == 0 {
				result = append(result, []int{nums[i], nums[left], nums[right]})

				//跳过重复的'left'
				for left < right && nums[left] == nums[left+1] {
					left++
				}
				//跳过重复的'right'
				for left < right && nums[right] == nums[right-1] {
					right--
				}
				//移动指针查找新的组合
				left++
				right--
			} else if sum < 0 {
				left++ //需要更大的数
			} else {
				right-- //需要更小的数
			}
		}
	}
	return result
}
func main() {
	nums := []int{-1, 0, 1, 2, -1, -4}
	fmt.Println(threeSum(nums))
}
