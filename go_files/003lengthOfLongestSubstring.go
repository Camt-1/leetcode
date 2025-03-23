package main

import "fmt"

func lengthOfLongestSubstring(s string) int {
	//哈希结合,记录每个字符是否出现过
	m := map[rune]int{}
	n := len(s)
	//右指针,初始值为-1,相当于在字符串的左边界的左侧,还没开始移动
	rk, ans := -1, 0
	for i := 0; i < n; i++ {
		if i != 0 {
			//左指针向右移动一格,移除一个字符
			delete(m, rune(s[i-1]))
		}
		for rk+1 < n && m[rune(s[rk+1])] == 0 {
			//不断地移动右指针
			m[rune(s[rk+1])]++
			rk++
		}
		//第1到rk个字符是一个极长地无重复字符串
		ans = max(ans, rk-i+1)
	}
	return ans
}

func max(x, y int) int {
	if x < y {
		return y
	}
	return x
}

func main() {
	testString := "testString"
	fmt.Println(lengthOfLongestSubstring(testString))
}
