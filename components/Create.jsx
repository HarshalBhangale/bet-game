import React, { useEffect, useState } from "react"
import { Button, DatePicker, Input } from "antd"


const { TextArea } = Input

const Create = () => {
    const [img, setImg] = useState()
    function handleChange(e) {
        console.log(e.target.files)
        setImg(URL.createObjectURL(e.target.files[0]))
    }

    const {
        connect,
        account,
        network,
        connected,
        disconnect,
        wallet,
        wallets,
        signAndSubmitTransaction,
        signAndSubmitBCSTransaction,
        signTransaction,
        signMessage,
        signMessageAndVerify,
    } = useWallet()

    

    return (
        <div className="border-2 p-8 my-2 rounded-lg">
            <div className="my-2">
                <h2>Add Image:</h2>
                <input type="file" onChange={handleChange} />
                <img className="max-w-[200px] rounded-full mx-auto my-2" src={img} />
            </div>

            <div className="my-2">
                <h2>Description:</h2>
                <TextArea rows={4} />
            </div>

            <div className="my-8">
                <h2>Location</h2>
                <Input placeholder="Location" />
                <h2>Date</h2>
                <DatePicker placement={"topLeft"} />
            </div>

            <div className="">
                <h2>Add addresses:</h2>
                <TextArea rows={4} />
            </div>

            <p>--- OR ---</p>

            <Button onClick={mintNFT}>Generate Link</Button>
        </div>
    )
}

export default Create