import BaseScene from "mai3-phaser-ui/dist/scene";
import { GridLayout } from "mai3-phaser-ui/dist/ui/GridLayout";

export class DemoScene extends BaseScene {
    private gridLayout!: GridLayout;

    constructor() {
        super('DemoScene');
    }

    preload() {
        super.preload();
    }

    async create() {
        this.createDemoNavigation();
    }

    private createDemoNavigation() {
        this.gridLayout = new GridLayout(this, {
            x: 100,
            y: 100,
            width: 600,
            height: 800,
            padding: 10,
            rowGap: 10,
            columnGap: 10,
            background: 0x333333,
            borderWidth: 2,
            borderColor: 0x000000,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            radius: 10,
        });

        this.add.existing(this.gridLayout);

        const demoScenes = [
            { name: 'Toast演示', scene: 'ToastDemo', color: 0x4CAF50 },
            { name: '网格布局演示', scene: 'GridLayoutDemo', color: 0x2196F3 },
            { name: '标签页演示', scene: 'TabsDemo', color: 0xFFC107 },
            { name: '复选框演示', scene: 'CheckboxDemo', color: 0xFF5722 },
            { name: '滑块演示', scene: 'SliderDemo', color: 0x9C27B0 },
            { name: '进度条演示', scene: 'ProgressBarDemo', color: 0x795548 },
            { name: '对话框演示', scene: 'DialogDemo', color: 0x607D8B },
            // { name: '菜单演示', scene: 'MenuDemo', color: 0xE91E63 },
            { name: '标签演示', scene: 'LabelDemo', color: 0x3F51B5 },
            { name: '图像演示', scene: 'ImageDemo', color: 0x009688 },
            { name: '按钮演示', scene: 'ButtonDemo', color: 0xCDDC39 },
            { name: '调整大小演示', scene: 'ResizeDemo', color: 0xFF9800 },
            { name: '文本框演示', scene: 'TextBoxDemo', color: 0x8BC34A },
        ];

        for (let i = 0; i < demoScenes.length; i += 3) {
            const rowButtons = [];
            for (let j = 0; j < 3 && i + j < demoScenes.length; j++) {
                const demo = demoScenes[i + j];
                rowButtons.push({
                    type: 'TextButton',
                    text: demo.name,
                    width: 180,
                    height: 60,
                    textStyle: { fontFamily: 'Arial', fontSize: '20px', color: '#FFFFFF' },
                    backgroundColor: demo.color,
                    borderColor: Phaser.Display.Color.IntegerToColor(demo.color).darken(15).color,
                    borderWidth: 2,
                    radius: 10,
                    columnSpan: 4,
                    handleHover: { audio: "sfx-hover" },
                    handleDown: { audio: "sfx-press" },
                    handleUp: { 
                        handleFn: () => {
                            this.scene.start(demo.scene);
                        }
                    }
                });
            }
            this.gridLayout.addRow(rowButtons);
        }
    }
        
    update() { }
}