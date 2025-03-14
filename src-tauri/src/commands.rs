#![allow(unused)]
#![warn(unused_variables, unreachable_code, unused_parens)]

use tauri_plugin_clipboard_manager::ClipboardExt;
use tauri_plugin_dialog::DialogExt;
use tauri_plugin_opener::OpenerExt;

use tauri_plugin_fs::FilePath;

#[tauri::command]
pub fn copy_to_clipboard(app: tauri::AppHandle, text: &str) -> Result<(), String> {
    app.clipboard()
        .write_text(String::from(text))
        .map_err(|e: tauri_plugin_clipboard_manager::Error| e.to_string())
}

#[tauri::command]
pub fn open_url(app: tauri::AppHandle, url: &str) -> Result<(), String> {
    app.opener()
        .open_url(url, None::<&str>)
        .map_err(|e: tauri_plugin_opener::Error| e.to_string())
}

#[tauri::command]
pub fn pick_file(app: tauri::AppHandle) -> Result<String, String> {
    let file_path: Option<tauri_plugin_dialog::FilePath> = app
        .dialog()
        .file()
        .add_filter(
            "Allowed Files",
            &["json", "jsonc", "json5", "xml", "csv", "toml"],
        )
        .blocking_pick_file();

    if let Some(path) = file_path {
        return Ok(path.to_string());
    }

    Err(String::from("No file selected!"))
}

#[tauri::command]
pub async fn read_file_content(path: &str) -> Result<String, String> {
    std::fs::read_to_string(std::path::PathBuf::from(path)).map_err(|e: std::io::Error| e.to_string())
}