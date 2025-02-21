
export function toES(value: string): string {
  const dict: Record<string, string> = {
    "Create New": "Crear Nuevo",
    "Load File": "Cargar Archivo",
    "Paste Text": "Pegar Texto",
    "Download": "Descargar",
    "Settings": "Opciones",
    "Clear": "Limpiar",
    "Options": "Opciones"
  }
  

  return dict[value] ?? "";
}

