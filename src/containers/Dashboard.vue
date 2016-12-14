<template>
  <div>
    <ul class="dashboard">
      <card
        v-for="share of list"
        :info="share"
        @card-click="onCardClick"
        @card-thumb="onCardThumb"
      >
      </card>
    </ul>
    <el-dialog
      :title="currentCard.title + ' - 详情'"
      v-model="dialogTableVisible"
      v-if="currentCard"
      top="5%"
      size="large"
    >
      <el-row>


        <el-col :span="15">
          <span>{{currentCard.title}}</span>
          <span>{{currentCard.author}}</span>
          <span>{{currentCard.date}}</span>
          <span @click="onCardThumb(currentCard)" style="cursor: pointer;">{{currentCard.thumbCount}}赞</span>

          <div style="height: 310px;overflow-y: scroll;">
            <p>这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内<br><br>容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这<br><br>是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内<br><br>容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容</p>
          </div>

          <div style="height: 180px;overflow-y: scroll;">
            <el-card class="box-card" v-for="comment in currentCard.comments">
              <div class="text item">
                {{ comment }}
              </div>
            </el-card>
          </div>
        </el-col>


        <el-col :span="9">
          <el-tabs style="width: 100%;">
            <el-tab-pane label="输入评论">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入评论"
                v-model="textarea">
              </el-input>
            </el-tab-pane>
            <el-tab-pane label="查看预览">查看预览</el-tab-pane>
          </el-tabs>

          <el-button type="primary">评论</el-button>
        </el-col>

        
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import Card from '../components/Card';

export default {
  name: 'dashboard',
  components: { Card },
  data() {
    return {
      currentCard: null,
      dialogTableVisible: false,
      textarea: '',
      list: [
        {
          title: 'Effective Javascript',
          author: 'Kevin Hu',
          date: '2016-11-11',
          id: 1,
          thumbCount: 0,
          comments: [
            '评论1',
            '评论2',
            '评论3',
          ],
        },
        {
          title: 'Redux Introduction',
          author: 'Cagen',
          date: '2016-11-12',
          id: 2,
          thumbCount: 0,
          comments: [
            '评论1',
            '评论2',
            '评论3',
          ],
        },
        {
          title: 'Effective Javascript',
          author: 'Kevin Hu',
          date: '2016-11-11',
          id: 3,
          thumbCount: 0,
          comments: [
            '评论1',
            '评论2',
            '评论3',
          ],
        },
        {
          title: 'Redux Introduction',
          author: 'Cagen',
          date: '2016-11-12',
          id: 4,
          thumbCount: 0,
          comments: [
            '评论1',
            '评论2',
            '评论3',
          ],
        },
        {
          title: 'Effective Javascript',
          author: 'Kevin Hu',
          date: '2016-11-11',
          id: 5,
          thumbCount: 0,
          comments: [
            '评论1',
            '评论2',
            '评论3',
          ],
        },
        {
          title: 'Redux Introduction',
          author: 'Cagen',
          date: '2016-11-12',
          id: 6,
          thumbCount: 0,
          comments: [
            '评论1',
            '评论2',
            '评论3',
          ],
        },
      ],
    };
  },

  methods: {
    onCardClick(share) {
      /* eslint-disable no-console */
      this.currentCard = share;
      console.log(share.id);
      this.dialogTableVisible = true;
    },

    onCardThumb(share) {
      console.log('thumb!', share.id);
      const thumbShare = this.list.filter(everyShare => everyShare.id === share.id);
      /* eslint-disable no-plusplus */
      thumbShare[0].thumbCount ++;
    },
  },
};
</script>
<style scope>
  .dashboard {
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }

  /*li {
    display: inline-block;
    width: 280px;
    margin: 15px;
    transform: translate3d(0,0,0);
    transition: all 218ms;
    list-style: none;
    border-radius: 4px;
    cursor: pointer;
  }

  li:hover {
    transform: translate3d(0,-5px,0);
    box-shadow: 0 7px 21px rgba(0,0,0,.15);
  }*/
</style>
