#![allow(unused)]
#![warn(unused_variables, unreachable_code, unused_parens)]

use tauri_plugin_clipboard_manager::ClipboardExt;
use tauri_plugin_opener::OpenerExt;


#[tauri::command]
fn copy_to_clipboard(app: tauri::AppHandle, text: &str) -> Result<(), String> {
    app.clipboard()
        .write_text(String::from(text))
        .map_err(|e: tauri_plugin_clipboard_manager::Error| e.to_string())
}

#[tauri::command]
fn open_url(app: tauri::AppHandle, url: &str) -> Result<(), String> {
    app.opener().open_url(url,  None::<&str>).map_err(|e: tauri_plugin_opener::Error| e.to_string())
}


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![copy_to_clipboard, open_url])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

