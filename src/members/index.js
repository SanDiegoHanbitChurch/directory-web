import React from 'react';
import Members from './Members';

const MembersContainer = () => {

    const members = [
            {
                "id": "0a25f500-8206-43e1-aafc-9a1ea40ea3f9",
                "name": "Jordane Kautzer",
                "avatar": "https://cdn.fakercloud.com/avatars/carlfairclough_128.jpg",
                "phone": "421-419-2311 x49528",
                "email": "Jordane.Kautzer37@gmail.com"
            },
            {
                "id": "c2bfde37-c3b5-48ae-8c52-1e48420043eb",
                "name": "Marguerite Bradtke",
                "avatar": "https://cdn.fakercloud.com/avatars/dimaposnyy_128.jpg",
                "phone": "(898) 768-1366 x716",
                "email": "Marguerite20@yahoo.com"
            },
            {
                "id": "75683157-4f4e-45f7-b9bf-48b6c48dd080",
                "name": "Cyril Pollich",
                "avatar": "https://cdn.fakercloud.com/avatars/wesleytrankin_128.jpg",
                "phone": "(287) 898-1142 x861",
                "email": "Cyril_Pollich16@hotmail.com"
            },
        ];

    return (
        <Members members={members}/>
    )
}

export default MembersContainer;
