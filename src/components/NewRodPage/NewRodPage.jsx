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
    fetchCountries,
    fetchaAssemblyTypes,
    fetchaRodTypes,
    fetchaMaterialsRod,
    fetchaMaterialsHandle,
    fetchaReelSeat,
} from '../../features/newRodPage/newRodPageSlice';

export default function NewRodPage() {
    const dispatch = useDispatch();
    const [rodName, setRodName] = useState('')
    const [rodCountries, setRodCountries] = useState('')
    const [rodAssemblyTypes, setRodAssemblyTypes] = useState('')
    const [rodTypes, setRodTypes] = useState('')
    const [rodMaterials, setRodMaterials] = useState('')
    const [rodHandleMaterials, setRodHandleMaterials] = useState('')
    const [rodReelSeat, setRodReelSeat] = useState('')

    const onEnterName = (e) => {
        setRodName(e.target.value)
        console.log(rodName)
    }
    const onChangeCountries = (e) => {
        setRodCountries(e.target.selectedItem)
        console.log(rodCountries)
    }
    const onChangeAssemblyTypes = (e) => {
        setRodAssemblyTypes(e.target.selectedItem)
        console.log(rodAssemblyTypes)
    }
    const onChangeRodTypes = (e) => {
        setRodTypes(e.target.selectedItem)
        console.log(rodTypes)
    }
    const onChangeRodMaterials = (e) => {
        setRodMaterials(e.target.selectedItem)
        console.log(rodMaterials)
    }
    const onChangeRodHandleMaterials = (e) => {
        setRodHandleMaterials(e.target.selectedItem)
        console.log(rodHandleMaterials)
    }
    const onChangeRodReelSeat = (e) => {
        setRodReelSeat(e.target.selectedItem)
        console.log(rodReelSeat)
    }

    const countries = useSelector(countriesSelector);
    const assemblyTypes = useSelector(assemblyTypesSelector);
    const rRodTypes = useSelector(rodTypesSelector);
    const materialsRod = useSelector(materialsRodSelector);
    const materialsHandle = useSelector(materialsHandleSelector);
    const reelSeat = useSelector(reelSeatSelector);

    useEffect(() => {
        if (countries.length === 0) dispatch(fetchCountries());
        if (assemblyTypes.length === 0) dispatch(fetchaAssemblyTypes());
        if (rRodTypes.length === 0) dispatch(fetchaRodTypes());
        if (materialsRod.length === 0) dispatch(fetchaMaterialsRod());
        if (materialsHandle.length === 0) dispatch(fetchaMaterialsHandle());
        if (reelSeat.length === 0) dispatch(fetchaReelSeat());
    }, [dispatch])

    const renderedCountries = countries.map(countrie => {
        return <Option key={countrie.ID}>{countrie.Text}</Option>
    })
    const renderedAssemblyTypes = assemblyTypes.map(assemblyType => {
        return <Option key={assemblyType.ID}>{assemblyType.Text}</Option>
    })
    const renderedRodTypes = rRodTypes.map(rRodType => {
        return <Option key={rRodType.ID}>{rRodType.Text}</Option>
    })
    const renderedMaterialsRod = materialsRod.map(materialRod => {
        return <Option key={materialRod.ID}>{materialRod.Text}</Option>
    })
    const renderedMaterialsHandle = materialsHandle.map(materialHandle => {
        return <Option key={materialHandle.ID}>{materialHandle.Text}</Option>
    })
    const renderedReelSeat = reelSeat.map(reelSeat => {
        return <Option key={reelSeat.ID}>{reelSeat.Text}</Option>
    })

    return (
        <div>
            <Form
                style={{
                    alignItems: 'center'
                }}
                titleText="New Fishing Rod"
            >
                <FormGroup titleText="Your Fishing Rod">
                    <FormItem label="Name">
                        <Input onInput={(e) => onEnterName(e)} />
                    </FormItem>
                    <FormItem label="Price">
                        <Input />
                    </FormItem>
                    <FormItem label="Assembly Type">
                        <Select onChange={onChangeAssemblyTypes}>
                            {renderedAssemblyTypes}
                        </Select>
                    </FormItem>
                    <FormItem label="Fishing rod">
                        <Select onChange={onChangeRodTypes}>
                            {renderedRodTypes}
                        </Select>
                    </FormItem>
                    <FormItem label="Length">
                        <Input />
                    </FormItem>
                    <FormItem>
                        <Slider
                            onChange={function noRefCheck() { }}
                            onInput={function noRefCheck() { }}
                        />
                    </FormItem>
                    <FormItem label="Length Knee(sm)">
                        <Input />
                    </FormItem>
                    <FormItem>
                        <Slider
                            onChange={function noRefCheck() { }}
                            onInput={function noRefCheck() { }}
                        />
                    </FormItem>
                    <FormItem label="Fishing rod knee">
                        <Input />
                    </FormItem>
                    <FormItem label="Number of fishing rod rings">
                        <Input />
                    </FormItem>
                    <FormItem label="Lead ring inserts">
                        <RadioButton name="GroupA" text="Option A" />
                        <RadioButton name="GroupA" text="Option B" />
                        <RadioButton name="GroupA" text="Option C" />
                    </FormItem>
                    <FormItem label="Min fishing rod test(gram)">
                        <Input />
                    </FormItem>
                    <FormItem label="Max fishing rod test(gram)">
                        <Input />
                    </FormItem>
                    <FormItem label="Rod material">
                        <Select onChange={onChangeRodMaterials}>
                            {renderedMaterialsRod}
                        </Select>
                    </FormItem>
                    <FormItem label="Reel seat">
                        <Select onChange={onChangeRodReelSeat}>
                           {renderedReelSeat}
                        </Select>
                    </FormItem>
                    <FormItem label="Rod handle material">
                        <Select onChange={onChangeRodHandleMaterials}>
                            {renderedMaterialsHandle}
                        </Select>
                    </FormItem>
                    <FormItem label="Made in">
                        <Select onChange={onChangeCountries}>
                            {renderedCountries}
                        </Select>
                    </FormItem>
                    <FormItem label="Weight fishing rod(gram)">
                        <Input />
                    </FormItem>
                </FormGroup>
            </Form>
            <Footer />
        </div>
    );
}