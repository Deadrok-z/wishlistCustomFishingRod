import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Form,
    FormItem,
    Input,
    FormGroup,
    Select,
    Option,
    Slider,
    RadioButton
} from '@ui5/webcomponents-react';
import Footer from '../footer/newRodFooter';
import {
    countriesSelector,
    assemblyTypesSelector,
    rodTypesSelector,
    materialsRodSelector,
    materialsHandleSelector,
    reelSeatSelector,
    insertsSelector,
    fetchCountries,
    fetchaAssemblyTypes,
    fetchaRodTypes,
    fetchaMaterialsRod,
    fetchaMaterialsHandle,
    fetchaReelSeat,
    fetchaInserts,
} from '../../features/newRodPage/newRodPageSlice';

export default function NewRodPage() {
    const dispatch = useDispatch();
    const [rodName, setRodName] = useState('');
    const [rodPrice, setRodPrice] = useState(0);
    const [rodLength, setRodLength] = useState(50);
    const [rodLengthKnee, setRodLengthKnee] = useState(10);
    const [rodKneeHandleLength, setRodKneeHandleLength] = useState(0);
    const [rodNumberKnee, setRodNumberKnee] = useState(0);
    const [rodNumberRings, setRodNumberRings] = useState(0);
    const [rodMinTest, setRodMinTest] = useState(0);
    const [rodMaxTest, setRodMaxTest] = useState(0);
    const [rodWeight, setRodWeight] = useState(0);
    const [rodCountries, setRodCountries] = useState('');
    const [rodAssemblyTypes, setRodAssemblyTypes] = useState('');
    const [rodTypes, setRodTypes] = useState('Feeder');
    const [rodMaximumLength, setRodMaximumLength] = useState(0);
    const [rodMaterials, setRodMaterials] = useState('');
    const [rodHandleMaterials, setRodHandleMaterials] = useState('');
    const [rodReelSeat, setRodReelSeat] = useState('');
    const [rodInserts, setRodInserts] = useState('');

    useEffect(() => {
        onСalculateNumberKnee(rodLength, rodLengthKnee);
        onСalculateNumberRings(rodLength, rodKneeHandleLength);
        onChooseMaximumLength(rodTypes)
    }, [rodLength, rodLengthKnee, rodKneeHandleLength, rodTypes])

    const onEnterName = (e) => {
        setRodName(e.target.value)
        console.log(rodName)
    };
    const onEnterPrice = (e) => {
        setRodPrice(e.target.value)
        console.log(rodPrice)
    };
    const onEnterLength = (e) => {
        setRodLength(e.target.value)

        console.log(rodLength)
    };
    const onEnterLengthKnee = (e) => {
        setRodLengthKnee(e.target.value)
        console.log(rodLengthKnee)
    };
    const onEnterKneeHandleLength = (e) => {
        setRodKneeHandleLength(e.target.value)
        console.log(rodKneeHandleLength)
    };
    const onСalculateNumberKnee = (rodLength, rodLengthKnee) => {
        setRodNumberKnee(Math.ceil((Number(rodLength)) / (Number(rodLengthKnee) - 5)))
        console.log(rodNumberKnee)
    };
    const onСalculateNumberRings = (rodLength, rodKneeHandleLength) => {
        const d = 2.5;
        const a = 5;
        const l = rodKneeHandleLength;
        const L = rodLength;
        const D = (2 * a - d) ^ 2 + 4 * d * 2 * (L - l);
        const n1 = ((d - 2 * a) + Math.sqrt(D)) / (2 * d);
        const n2 = ((d - 2 * a) - Math.sqrt(D)) / (2 * d);
        setRodNumberRings(Math.ceil(n1 < 0 ? n2 : n1));
        console.log(rodNumberRings)
    };
    const onEnterMinTest = (e) => {
        setRodMinTest(e.target.value)
        console.log(rodMinTest)
    };
    const onEnterMaxTest = (e) => {
        setRodMaxTest(e.target.value)
        console.log(rodMaxTest)
    };
    const onEnterWeight = (e) => {
        setRodWeight(e.target.value)
        console.log(rodWeight)
    };
    const onChangeCountries = (e) => {
        setRodCountries(e.target.selectedItem)
        console.log(rodCountries)
    };
    const onChangeAssemblyTypes = (e) => {
        setRodAssemblyTypes(e.target.selectedItem)
        console.log(rodAssemblyTypes)
    };
    const onChangeRodTypes = (e) => {
        setRodTypes(e.detail.selectedOption.value)
        console.log(rodTypes)
    };
    const onChooseMaximumLength = (rodTypes) => {
        if (rodTypes == "Feeder") {
            setRodMaximumLength(600);
        }
        if (rodTypes == "Spinning") {
            setRodMaximumLength(300);
        }
        if (rodTypes == "Pole rod") {
            setRodMaximumLength(2000);
        }
        if (rodTypes == "Fishing rod") {
            setRodMaximumLength(1000);
        }
    };
    const onChangeRodMaterials = (e) => {
        setRodMaterials(e.target.selectedItem)
        console.log(rodMaterials)
    };
    const onChangeRodHandleMaterials = (e) => {
        setRodHandleMaterials(e.target.selectedItem)
        console.log(rodHandleMaterials)
    };
    const onChangeRodReelSeat = (e) => {
        setRodReelSeat(e.target.selectedItem)
        console.log(rodReelSeat)
    };
    const onChangeRodInserts = (e) => {
        setRodInserts(e.target.text)
        console.log(rodInserts)
    };

    const countries = useSelector(countriesSelector);
    const assemblyTypes = useSelector(assemblyTypesSelector);
    const rRodTypes = useSelector(rodTypesSelector);
    const materialsRod = useSelector(materialsRodSelector);
    const materialsHandle = useSelector(materialsHandleSelector);
    const reelSeat = useSelector(reelSeatSelector);
    const inserts = useSelector(insertsSelector);

    useEffect(() => {
        if (countries.length === 0) dispatch(fetchCountries());
        if (assemblyTypes.length === 0) dispatch(fetchaAssemblyTypes());
        if (rRodTypes.length === 0) dispatch(fetchaRodTypes());
        if (materialsRod.length === 0) dispatch(fetchaMaterialsRod());
        if (materialsHandle.length === 0) dispatch(fetchaMaterialsHandle());
        if (reelSeat.length === 0) dispatch(fetchaReelSeat());
        if (inserts.length === 0) dispatch(fetchaInserts());
    }, [dispatch])

    const renderedCountries = countries.map(countrie => {
        return <Option key={countrie.ID}>{countrie.Text}</Option>
    })
    const renderedAssemblyTypes = assemblyTypes.map(assemblyType => {
        return <Option key={assemblyType.ID}>{assemblyType.Text}</Option>
    })
    const renderedRodTypes = rRodTypes.map(rRodType => {
        return <Option key={rRodType.ID} value={rRodType.Text} >{rRodType.Text}</Option>
    })
    const renderedMaterialsRod = materialsRod.map(materialRod => {
        return <Option key={materialRod.ID} data-id={materialRod.ID}>{materialRod.Text}</Option>
    })
    const renderedMaterialsHandle = materialsHandle.map(materialHandle => {
        return <Option key={materialHandle.ID}>{materialHandle.Text}</Option>
    })
    const renderedReelSeat = reelSeat.map(reelSeat => {
        return <Option key={reelSeat.ID}>{reelSeat.Text}</Option>
    })
    const renderedInsertsButtons = inserts.map(insert => {
        return <RadioButton checked key={insert.ID} name="GroupA" text={insert.Text} onChange={onChangeRodInserts} />
    })

    return (
        <>
            <div style={{
                marginBottom: "100px"
            }}>
                <Form
                    style={{
                        alignItems: 'center'
                    }}
                    titleText="New Fishing Rod"
                >
                    <FormGroup titleText="Your Fishing Rod">
                        <FormItem label="Name">
                            <Input onInput={(e) => onEnterName(e)} type="Text" placeholder="Enter Name" />
                        </FormItem>
                        <FormItem label="Price">
                            <Input onInput={(e) => onEnterPrice(e)} type="Number" placeholder="Enter Price" />
                        </FormItem>
                        <FormItem label="Assembly Type">
                            <Select onChange={onChangeAssemblyTypes}  >
                                {renderedAssemblyTypes}
                            </Select>
                        </FormItem>
                        <FormItem label="Fishing rod">
                            <Select onChange={onChangeRodTypes}  >
                                {renderedRodTypes}
                            </Select>
                        </FormItem>
                        <FormItem label="Length(sm)">
                            <Input onInput={(e) => onEnterLength(e)} value={rodLength} type="Number" />
                        </FormItem>
                        <FormItem label="">
                            <Slider
                                labelInterval={1}
                                showTickmarks
                                min={50}
                                max={rodMaximumLength}
                                onChange={onEnterLength}
                                onInput={onEnterLength}
                                value={rodLength}

                            />
                        </FormItem>
                        <FormItem label="Length Knee(sm)">
                            <Input onInput={(e) => onEnterLengthKnee(e)} value={rodLengthKnee} type="Number" />
                        </FormItem>
                        <FormItem label="">
                            <Slider
                                labelInterval={1}
                                showTickmarks
                                min={10}
                                max={rodLength}
                                onChange={onEnterLengthKnee}
                                onInput={onEnterLengthKnee}
                                value={rodLengthKnee}
                            />
                        </FormItem>
                        <FormItem label="Knee Handle Length(sm)">
                            <Input onInput={(e) => onEnterLengthKnee(e)} value={rodKneeHandleLength} type="Number" />
                        </FormItem>
                        <FormItem label="">
                            <Slider
                                labelInterval={1}
                                showTickmarks
                                min={0}
                                max={rodLengthKnee}
                                onChange={onEnterKneeHandleLength}
                                onInput={onEnterKneeHandleLength}
                                value={rodKneeHandleLength}
                            />
                        </FormItem>
                        <FormItem label="Number of rod knees">
                            <Input disabled value={rodNumberKnee} type="Number" />
                        </FormItem>
                        <FormItem label="Number of fishing rod rings">
                            <Input disabled value={rodNumberRings} type="Number" />
                        </FormItem>
                        <FormItem label="Lead ring inserts">
                            {renderedInsertsButtons}
                        </FormItem>
                        <FormItem label="Min fishing rod test(gram)">
                            <Input onInput={(e) => onEnterMinTest(e)} type="Number" placeholder="Enter min fishing rod test" />
                        </FormItem>
                        <FormItem label="Max fishing rod test(gram)">
                            <Input onInput={(e) => onEnterMaxTest(e)} type="Number" placeholder="Enter max fishing rod test" />
                        </FormItem>
                        <FormItem label="Rod material">
                            <Select onChange={onChangeRodMaterials}  >
                                {renderedMaterialsRod}
                            </Select>
                        </FormItem>
                        <FormItem label="Reel seat">
                            <Select onChange={onChangeRodReelSeat}  >
                                {renderedReelSeat}
                            </Select>
                        </FormItem>
                        <FormItem label="Rod handle material">
                            <Select onChange={onChangeRodHandleMaterials}  >
                                {renderedMaterialsHandle}
                            </Select>
                        </FormItem>
                        <FormItem label="Made in">
                            <Select onChange={onChangeCountries}  >
                                {renderedCountries}
                            </Select>
                        </FormItem>
                        <FormItem label="Weight fishing rod(gram)">
                            <Input onInput={(e) => onEnterWeight(e)} type="Number" placeholder="Enter Weight" />
                        </FormItem>
                    </FormGroup>
                </Form>
            </div>
            <Footer />
        </>

    );
}