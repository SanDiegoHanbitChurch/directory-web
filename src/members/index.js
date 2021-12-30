import React from 'react';
import Members from './members';

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
            {
                "id": "21d764d7-542f-4a81-abc1-0a7b162a76a7",
                "name": "Quincy Donnelly",
                "avatar": "https://cdn.fakercloud.com/avatars/namankreative_128.jpg",
                "phone": "328-976-3872 x125",
                "email": "Quincy32@hotmail.com"
            },
            {
                "id": "3810273b-48e6-478c-a6bc-7a1171de18b8",
                "name": "Glenna Schaden",
                "avatar": "https://cdn.fakercloud.com/avatars/gregsqueeb_128.jpg",
                "phone": "1-600-465-4093 x35770",
                "email": "Glenna.Schaden6@gmail.com"
            },
            {
                "id": "0a055f39-9d6c-4e85-a6dc-400a1212baef",
                "name": "Harold Gutmann",
                "avatar": "https://cdn.fakercloud.com/avatars/maximsorokin_128.jpg",
                "phone": "1-268-572-8174",
                "email": "Harold10@gmail.com"
            },
            {
                "id": "ba121cb1-9ee9-4c33-b7e0-abe6fedf9efc",
                "name": "Janis Wyman",
                "avatar": "https://cdn.fakercloud.com/avatars/amandabuzard_128.jpg",
                "phone": "(389) 962-7951",
                "email": "Janis_Wyman@hotmail.com"
            },
            {
                "id": "35e88c7c-e61c-4aa9-add0-d62ac9d1e2c6",
                "name": "Maye Larkin",
                "avatar": "https://cdn.fakercloud.com/avatars/ooomz_128.jpg",
                "phone": "(692) 425-8538",
                "email": "Maye79@gmail.com"
            },
            {
                "id": "2f43a096-cfa7-4e6f-ae4f-a59f70449bb9",
                "name": "Arvid Kshlerin",
                "avatar": "https://cdn.fakercloud.com/avatars/mashaaaaal_128.jpg",
                "phone": "500-660-8480",
                "email": "Arvid.Kshlerin@yahoo.com"
            },
            {
                "id": "c59eb7c1-9277-437d-a5cb-8cbceb94a87d",
                "name": "Zena O'Hara",
                "avatar": "https://cdn.fakercloud.com/avatars/begreative_128.jpg",
                "phone": "954.275.7375",
                "email": "Zena.OHara@gmail.com"
            },
        ];

    return (
        <Members members={members}/>
    )
}

export default MembersContainer;
