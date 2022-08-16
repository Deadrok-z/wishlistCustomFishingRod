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
import { countriesSelector, fetchCountries } from '../../features/newRodPage/newRodPageSlice';

export default function NewRodPage() {
    const dispatch = useDispatch();
    const [rodName, setRodName] = useState('')
    const [rodCountries, setRodCountries] = useState('')
    const onEnterName = (e) => {
        setRodName(e.target.value)
        console.log(rodName)
    }

    const onChangeCountries = (e) => {
        setRodCountries(e.target.selectedItem)
        console.log(rodCountries)
    }

    useEffect(() => {
        if (countries.length === 0) {
        dispatch(fetchCountries())
        }
    }, [dispatch])

    const countries = useSelector(countriesSelector)

    const renderedCountries = countries.map(countrie => {
        return <Option key={countrie.ID}>{countrie.Text}</Option>
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
                        <Select onChange={onChangeCountries}>
                            {renderedCountries}
                        </Select>
                    </FormItem>
                    <FormItem label="Fishing rod">
                        <Select>
                            {renderedCountries}
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
                        <Select>
                            <Option>
                                Germany
                            </Option>
                            <Option>
                                France
                            </Option>
                            <Option>
                                Italy
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Reel seat">
                        <Select>
                            <Option>
                                Germany
                            </Option>
                            <Option>
                                France
                            </Option>
                            <Option>
                                Italy
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Rod handle material">
                        <Select>
                            <Option>
                                Germany
                            </Option>
                            <Option>
                                France
                            </Option>
                            <Option>
                                Italy
                            </Option>
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