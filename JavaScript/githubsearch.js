document.getElementById("searchBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const resultDiv = document.getElementById("result");
    if (!username) {
        resultDiv.innerHTML = "<p>ユーザー名を入力してください。</p>";
        return;
    }
    fetch(`https://api.github.com/users/${username}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            resultDiv.innerHTML = `
                <p><strong>ユーザー名：</strong> ${data.login}</p>
                <p><strong>名前：</strong> ${data.name || "未設定"}</p>
            `;
        });
});
