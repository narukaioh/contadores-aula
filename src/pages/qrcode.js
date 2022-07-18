import { QRCodeCanvas } from 'qrcode.react';
import React from 'react';
import { useParams } from 'react-router-dom';

export const QrCodePage = () => {
    const { key } = useParams()

    return (
        <div className='container'>
            <QRCodeCanvas value={key} />
        </div>
    )
}