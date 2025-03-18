#![allow(unused)]
#![warn(unused_variables, unreachable_code, unused_parens)]

use tauri_plugin_clipboard_manager::ClipboardExt;
use tauri_plugin_dialog::DialogExt;
use tauri_plugin_opener::OpenerExt;

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
