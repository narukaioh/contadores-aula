import { Route, Routes } from "react-router-dom"
import { Form } from "./pages/formulario"
import { KeyList } from "./pages/listagem-chaves"
import { QrCodePage } from "./pages/qrcode"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<KeyList />} />
            <Route path="/form/:key" element={<Form />} />
            <Route path="/qrcode" element={<QrCodePage />} />
        </Routes>
    )
}