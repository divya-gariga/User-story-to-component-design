import React, { useState, useEffect, useCallback } from 'react';
import "./userdetails.css"
function UserDetails() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("female");
    const [display, setDisplay] = useState(false);
    const [ageImgSrc, setAgeImgSrc] = useState("");
    const [genderImgSrc, setGenderImgSrc] = useState("");
    const handleUserKeyPress = useCallback(event => {
        const { key, keyCode } = event;
        if (keyCode === 13) {
            setDisplay(true)
        }
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    useEffect(() => {
        if (age <= 18 && gender === 'male')
            setAgeImgSrc("Boy.png")
        else if (age <= 18 && gender === 'female')
            setAgeImgSrc("Girl.png")
        else if (age > 18 && age <= 40 && gender === 'male')
            setAgeImgSrc("Man.png")
        else if (age > 18 && age <= 40 && gender === 'female')
            setAgeImgSrc("Woman.png")
        else if (age > 40 && gender === 'male')
            setAgeImgSrc("OldMan.png")
        else if (age > 40 && gender === 'female')
            setAgeImgSrc("OldWoman.png")

    }, [age, gender])

    return (
        <div>
            <form>
                <label>
                    Name:<input type="text" value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </label>
                <p>{name}</p>
                {display && <div>

                    <input type="number" value={age}
                        onChange={(e) => setAge(e.target.value)} min="1" max="120" />

                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><div>
                        <img src={ageImgSrc} alt="avatar" className="avatar" /></div>
                </div>
                }

            </form>
        </div>
    );
}

export default UserDetails;