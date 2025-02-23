#![allow(unused)]
#![warn(unused_variables, unreachable_code, unused_parens)]

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}



//? sisias.sd.ale.cosa
// #[tauri::command]
// fn get_parent_length(path: &str) -> usize {
//     let mut res: usize = 0;

//     let mut endIndex: usize = 0;

//     for ch in path.chars().rev(). {
//         if ch == '.' {
//             endIndex = 
//         }
//     }


//     res
// }

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
