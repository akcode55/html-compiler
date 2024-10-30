
// تهيئة محرر CodeMirror
const editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    lineNumbers: true,
    mode: "htmlmixed",  // يدعم HTML و CSS و JavaScript
    matchBrackets: true, // مطابقة الأقواس
    theme: "material" // تطبيق ثيم material
});

// تشغيل الكود وعرض النتيجة
function runCode() {
    const code = editor.getValue();
    const outputDiv = document.getElementById("output");

    try {
        outputDiv.innerHTML = code;
    } catch (error) {
        outputDiv.innerHTML = `<span style="color: red;">خطأ في الكود: ${error.message}</span>`;
    }
}

// إعادة تعيين المحرر
function resetEditor() {
    editor.setValue("");
    document.getElementById("output").innerHTML = "";
}

// تحميل ملف HTML إلى المحرر
function loadFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        editor.setValue(e.target.result);
    };

    reader.readAsText(file);
}

// وظيفة الصفحة الرئيسية (كمثال)
function home() {
    alert("تم الضغط على الصفحة الرئيسية!");
}