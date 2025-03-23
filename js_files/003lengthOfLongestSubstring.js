const lengthOfLongestSubstring = function(s) {
    const occ = new Set();
    const n =s.length;
    let rk = -1, ans = 0;
    for (let i = 0; i < n; ++i) {
        if (i != 0) {
            occ.delete(s.charAt(i - 1));
        }
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
};

// 测试函数
function testLengthOfLongestSubstring() {
    const testCases = [
        { input: "abcabcbb", expected: 3 }, // 最长无重复子串是 "abc"
        { input: "bbbbb", expected: 1 },    // 最长无重复子串是 "b"
        { input: "pwwkew", expected: 3 },   // 最长无重复子串是 "wke"
        { input: "", expected: 0 },         // 空字符串，返回 0
        { input: " ", expected: 1 },        // 只有一个空格，返回 1
        { input: "abcdef", expected: 6 },   // 全部都是不同字符，返回 6
        { input: "abba", expected: 2 },     // 最长无重复子串是 "ab" 或 "ba"
        { input: "dvdf", expected: 3 },     // 最长无重复子串是 "vdf"
        { input: "tmmzuxt", expected: 5 }   // 最长无重复子串是 "mzuxt"
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = lengthOfLongestSubstring(input);
        console.log(`Test ${index + 1}: Input = "${input}", Output = ${result}, Expected = ${expected}`);
        console.assert(result === expected, `Test ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All tests completed.");
}

// 运行测试
testLengthOfLongestSubstring();
