import { Injectable } from '@nestjs/common';
import { Tweet } from '../entities/tweet.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class TweetsCountService {
  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet,
  ) {}

  @Interval(500)
  async countTweets() {
    console.log('executou');
  }
}
