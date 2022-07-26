import React from 'react';
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

export default function NewRodPage() {
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
                        <Input />
                    </FormItem>
                    <FormItem label="Price">
                        <Input />
                    </FormItem>
                    <FormItem label="Assembly Type">
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
                    <FormItem label="Fishing rod">
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
                    <FormItem label="Assembly Type">
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
                    <FormItem label="Assembly Type">
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
                    <FormItem label="Assembly Type">
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
                    <FormItem label="Assembly Type">
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
                    <FormItem label="Weight fishing rod(gram)">
                        <Input />
                    </FormItem>
                </FormGroup>
            </Form>
            <Footer />
        </div>
    );
}